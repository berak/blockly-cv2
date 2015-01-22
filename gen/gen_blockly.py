#!/usr/bin/env python
import sys
if sys.version_info[0] >= 3:
    from io import StringIO
else:
    from cStringIO import StringIO


from gen_mod import moduleroot,modules,extras,BLACK,IGNORE


class CWrapperGenerator(object):
    """
    CWrapperGenerator is a class for generating c sources from a set of opencv C++ headers. 

    this contains swallowable parts. keep away from children.
    """

    PRIM=("void","char","int","double","float","void*")
    REPL={"bool":"int","uchar":"char","String":"const char*","c_string":"const char*","int64":"long" }
    NAMESPACES={"SimpleBlobDetector_":"SimpleBlobDetector::","flann_":"flann::"}
    
    def __init__(self):
        self.buf_decl = StringIO()
        self.buf_def  = StringIO()
        self.buf_xml  = StringIO()
        self.IGNORE = IGNORE
        self.BLACK = BLACK
        self.overloads=[]
        
    def save(self, path, name, buf):
        f = open(path + "/" + name, "wt")
        f.write(buf.getvalue())
        f.close()

    # skip overloads:
    def overload(self,name):
        if name in self.overloads :
            return True
        self.overloads.append(name)
        return False
        
    def block_rtp(self,t):
        if t=="string" or t=="String":
            return ",'String'"
        if t=="Size":
            return ",'size'"
        if t=="Point":
            return ",'point'"
        if t=="Scalar":
            return ",'Colour'"
        if t=="Mat" or t=="OutputArray" :
            return ",'image'"
        if t=="int" or t=="double" or t=="float": 
            return ",'Number'"
        return ''

    def block_tc(self,t):
        if t=="string" or t=="String":
            return "\n        .setCheck('String')"
        if t=="Size":
            return "\n        .setCheck('size')"
        if t=="Point":
            return "\n        .setCheck('point')"
        if t=="Scalar":
            return "\n        .setCheck('Colour')"
        if t=="Mat":
            return "\n        .setCheck('image')"
        if t=="int" or t=="double" or t=="float": 
            return "\n        .setCheck('Number')"
        return ''

    def block_input(self,a,this):
        s = ""
        if a.tp=="int" or a.tp=="double" or a.tp=="float": 
            s += "    this.appendDummyInput()\n" 
            s += "        .appendField('" + a.name + "')\n"
            s += "        .appendField(new Blockly.FieldTextInput('0'), '" + a.name + "')"
        else:
            s += "    this.appendValueInput('" + a.name + "')\n"
            s += "        .appendField('" + a.name + "')"
            s += self.block_tc(a.tp)
        return s + ";\n"

    def js_input(self,a):
        if a.tp=="int" or a.tp=="double" or a.tp=="float": 
            return "  var " + a.name + " = block.getFieldValue('" + a.name + "');\n" 
        return "  var " + a.name + " = Blockly.Python.valueToCode(block, '" + a.name + "', Blockly.Python.ORDER_ATOMIC);\n" 

    colors = { "core": 99,
     "highgui": 199,
     "videoio": 22,
     "photo": 34,
     "imgproc": 12,
     "imgcodecs": 55,
     "features2d": 222,
     "shape": 180,
     "video": 243,
     "xfeatures2d": 320,
     "calib3d": 177,
     "objdetect": 38,
     "bgsegm": 347,
     "bioinspired":244,
     "stitching":135,
     "optflow":231,
     }

    contribs=["bioinspired","bgsegm","xphoto","xfeatures2d","optflow","ximgproc"]

    def internal_var(self,name):
        s =  "  getVars: function(){return [this.getFieldValue('"+name+"')]},\n"
        s += "  renameVar: function(oldName,newName) {if (Blockly.Names.equals(oldName,this.getFieldValue('"+name+"'))){this.setFieldValue(newName,'"+name+"');}},\n"
        return s
        

    def gen_method(self,method,this,namespace,doc):

        arghs = method.req
        
        longname = namespace + "_"
        if this: longname += this + "_"
        longname += method.name
        
        c=45
        if namespace in self.colors:
            c = self.colors[namespace]
            
        is_ctor = (this == method.name) or (method.name.find("create")>=0)
        if is_ctor and (this==None):
            if method.name.find("create")==0:
                this = method.name.split("create")[1]
                print "\t",this,"\t",method.name
        
        has_ret = (method.rtp != "void") and (is_ctor == False)
        ret_tp = method.rtp
        if not is_ctor:
            for a in arghs:
                if a.O: 
                    has_ret = True
                    ret_tp = a.tp
        can_inline = arghs.count < 4

        msig=method.name
        if method.name == "create":
            msig = this + "_" +method.name
               
        print has_ret,"\t",is_ctor,"\t", this!=None, "\t", msig
        
        #~ if this:
            #~ this = this.lower()

        sig = "Blockly.Blocks['"+longname+"'] = {\n"
        sig +="  init: function() {\n"
        sig +="    this.setColour("+str(c)+");\n"
        sig +="    this.appendDummyInput()\n"
        sig +="        .appendField('"+msig+"');\n"

        if this:
            sig += "    this.appendDummyInput()\n" 
            sig += "        .appendField(new Blockly.FieldVariable('"+this+"'), '"+this+"');\n"

        for a in arghs:
            print "  ARG ",a.O,"\t",a.I,"\t",a.tp,"\t",a.name
            if a.O and not a.I: continue
            s = self.block_input(a,this) 
            sig += s
        if has_ret:
            sig += "    this.setOutput(true"+self.block_rtp(ret_tp)+");\n"
        else:
            sig += "    this.setPreviousStatement(true);\n"
            sig += "    this.setNextStatement(true);\n"
        if can_inline:
            sig += "    this.setInputsInline(true);\n"
        sig += "    this.setTooltip('"+longname+"');\n"
        sig += "  },\n"
        if is_ctor or this:
            sig += self.internal_var(this)
        sig += "};\n"

        self.buf_decl.write(sig)

        body = "Blockly.Python['"+longname+"'] = function(block) {\n"
        if this:
            body += "  var " + this + " = block.getFieldValue('" + this + "');\n" 
        for a in arghs:
            if a.O and not a.I: continue
            body += self.js_input(a)
            
        body += "  var code = "
        if is_ctor:
            body += this + " + \" = cv2."
            if namespace in self.contribs:
                body += namespace + "."
            body += msig +"("
        elif this and this != method.name:
            body += this + " + \"." + method.name +"("
        else:
            body +=  "\"cv2." + method.name +"("
        for i,a in enumerate(arghs):
            if a.O and not a.I: continue
            if a.name==this : continue
            body += "\"+" + a.name + "+\","
        if len(arghs):
            body=body[:-1]
        body += ")"
        if not has_ret:
            body += "\\n"
        body += "\"\n"
        if has_ret or is_ctor:
            body += "  return [code, Blockly.Python.ORDER_NONE];\n"
        else:
            body += "  return code;\n"
        body += "};\n"
        self.buf_def.write(body)
        
        
        
    def gen(self, module_root, modules, extras, output_dir, out_h, out_c, out_xml):
        """
        Generate a set of c source files by parsing exported symbols
        in a set of C++ headers. The headers can be input in one (or both) of
        two methods:
        1. specify module_root and modules
           Given a path to the OpenCV module root and a list of module names,
           the headers to parse are implicitly constructed.
        2. specifiy header locations explicitly in extras
           Each element in the list of extras must be of the form:
           'namespace=/full/path/to/extra/header.hpp' where 'namespace' is
           the namespace in which the definitions should be added.
        The output_dir specifies the directory to write the generated sources
        to.
        """
        # parse each of the files and store in a dictionary
        # as a separate "namespace"
        parser = CppHeaderParser()
        rst    = rst_parser.RstParser(parser)
        rst_parser.verbose = False
        rst_parser.show_warnings = False
        rst_parser.show_errors = False
        rst_parser.show_critical_errors = False

        ns  = dict((key, []) for key in modules)
        doc = dict((key, []) for key in modules)
        path_template = Template('${module}/include/opencv2/${module}.hpp')

        for module in modules:
            # construct a header path from the module root and a path template
            header = os.path.join(module_root, path_template.substitute(module=module))
            # parse the definitions
            ns[module] = parser.parse(header)
            # parse the documentation
            rst.parse(module, os.path.join(module_root, module))
            doc[module] = rst.definitions
            rst.definitions = {}

        for extra in extras:
            module = extra.split("=")[0]
            header = extra.split("=")[1]
            ns[module] = ns[module] + parser.parse(header) if module in ns else parser.parse(header)

        # cleanify the parser output
        parse_tree = ParseTree()
        parse_tree.build(ns)


        # populate templates
        for namespace in parse_tree.namespaces:
            # functions
            print("// " + namespace.name)

            self.buf_xml.write("<category name=\""+namespace.name+"\">\n")
            for method in namespace.methods:
                if method.name in self.IGNORE: continue
                    
                longname = namespace.name+"_"+method.name
                if self.overload(longname): continue
                               
                self.gen_method(method,None,namespace.name,"")
                
                self.buf_xml.write("  <block type=\""+longname+"\"></block>\n")
            # classes
            for clss in namespace.classes:
                if clss.name in self.BLACK :
                    print("// " + namespace.name + "." + clss.name + " skipped.")
                    continue
                #~ print(namespace.name + "." + clss.name)
                #print(clss)
                for method in clss.methods:
                    longname = namespace.name+"_"+clss.name+"_"+method.name
                    if self.overload(longname): continue
                        
                    self.gen_method(method,clss.name,namespace.name,"")
                    self.buf_xml.write("  <block type=\""+longname+"\"></block>\n")
            self.buf_xml.write("</category>\n")

        # create a global constants lookup table
        # const = dict(constants(todict(parse_tree.namespaces)))
        # create a global constants lookup table
        const = dict(constants(todict(parse_tree.namespaces)))
        f = open("gen/const.js","wb")
        f.write( "[\n" )
        for c in sorted(const):
            f.write( "  [ " + c + ", cv2." + c + "],\n" )
        f.write( "]\n" )

        self.save(output_dir,out_h,self.buf_decl)
        self.save(output_dir,out_c,self.buf_def)
        self.save(output_dir,out_xml,self.buf_xml)

if __name__ == "__main__":
    """
    Usage: python gen_capi.py   --hdrparser /path/to/hdr_parser/dir
                                --rstparser /path/to/rst_parser/dir
                                --moduleroot /path/to/opencv/modules
                                --modules [core imgproc objdetect etc]
                                --extra namespace=/path/to/extra/header.hpp
                                --outdir /path/to/output/generated/srcs

    gen_capi.py is the main control script for generating capi source
    files from given set of headers. Internally, gen_capi:
      1. constructs the headers to parse from the module root and list of modules
      2. parses the headers using CppHeaderParser
      3. refactors the definitions using ParseTree
      4. parses .rst docs using RstParser
      5. populates the templates for classes, function, enums and docs from the
         definitions

    gen_capi.py requires the following inputs:
    --hdrparser    the path to the header parser directory
                   (opencv/modules/python/src2)
    --rstparser    the path to the rst parser directory
                   (opencv/modules/java/generator)
    --moduleroot   (optional) path to the opencv directory containing the modules
    --modules      (optional - required if --moduleroot specified) the modules
                   to produce bindings for. The path to the include directories
                   as well as the namespaces are constructed from the modules
                   and the moduleroot
    --extra        extra headers explicitly defined to parse. This must be in
                   the format "namespace=/path/to/extra/header.hpp". For example,
                   the core module requires the extra header:
                   "core=/opencv/modules/core/include/opencv2/core/base.hpp"
    --outdir       the output directory to put the generated capi sources. In
                   the OpenCV build this is "${CMAKE_CURRENT_BUILD_DIR}/src"
    """

    # parse the input options
    import sys, re, os, time
    #~ from argparse import ArgumentParser
    #~ parser = ArgumentParser()
    #~ parser.add_argument('--hdrparser')
    #~ parser.add_argument('--rstparser')
    #~ parser.add_argument('--moduleroot', default='', required=False)
    #~ parser.add_argument('--modules', nargs='*', default=[], required=False)
    #~ parser.add_argument('--extra', nargs='*', default=[], required=False)
    #~ parser.add_argument('--outdir')
    #~ args = parser.parse_args()

    #~ # add the hdr_parser and rst_parser modules to the path
    #~ sys.path.append(args.hdrparser)
    #~ sys.path.append(args.rstparser)

    from string import Template
    from hdr_parser import CppHeaderParser
    import rst_parser
    from parse_tree import ParseTree, todict, constants, Argument
    #~ from filters import *
    #~ from jinja2 import Environment, FileSystemLoader

    #~ from gen_mod import moduleroot,modules,extras
    #~ moduleroot="e:/code/opencv/modules"
    #~ modules=["core","highgui","imgproc","contrib","ml","objdetect"] #,"features2d"]
    #~ extras = ["core=e:/code/opencv/modules/core/include/opencv2/core/base.hpp",
              #~ "video=e:/code/opencv/modules/video/include/opencv2/video/tracking.hpp",
              #~ "video=e:/code/opencv/modules/video/include/opencv2/video/background_segm.hpp"]

    cg = CWrapperGenerator()
    cg.gen(moduleroot, modules, extras, "js/gen", "blocks.js", "python.js", "blocks.xml")
