"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[536],{63873:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=t(87462),d=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"bundling",title:"Bundle Formats"},r=void 0,s={unversionedId:"bundling",id:"bundling",isDocsHomePage:!1,title:"Bundle Formats",description:"When bundling, each of the modules gets assigned a numeric id, meaning no dynamic requires are supported. Requires are changed by its numeric version, and modules are stored in different possible formats. Three different formats of bundling are supported:",source:"@site/../docs/Bundling.md",sourceDirName:".",slug:"/bundling",permalink:"/metro/docs/bundling",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Bundling.md",tags:[],version:"current",lastUpdatedAt:1652187579,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"bundling",title:"Bundle Formats"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/metro/docs/troubleshooting"},next:{title:"Caching",permalink:"/metro/docs/caching"}},u=[{value:"Plain bundle",id:"plain-bundle",children:[]},{value:"Indexed RAM bundle",id:"indexed-ram-bundle",children:[]},{value:"File RAM bundle",id:"file-ram-bundle",children:[]}],m={toc:u};function h(e){var n=e.components,t=(0,d.Z)(e,l);return(0,a.mdx)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When bundling, each of the modules gets assigned a numeric id, meaning no dynamic requires are supported. Requires are changed by its numeric version, and modules are stored in different possible formats. Three different formats of bundling are supported:"),(0,a.mdx)("h2",{id:"plain-bundle"},"Plain bundle"),(0,a.mdx)("p",null,"This is the standard bundling format. In this format, all files are wrapped with a function call, then added to the global file. This is useful for environments that expect a JS only bundle (e.g. a browser). Just requiring the entry point with the ",(0,a.mdx)("inlineCode",{parentName:"p"},".bundle")," extension should trigger a build of it."),(0,a.mdx)("h2",{id:"indexed-ram-bundle"},"Indexed RAM bundle"),(0,a.mdx)("p",null,"This format composes the bundle as a binary file, which format has the following parts (all numbers are expressed in Little Endian):"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A magic number: a ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32")," must be located at the beginning of the file, with the value ",(0,a.mdx)("inlineCode",{parentName:"li"},"0xFB0BD1E5"),". This is used to verify the file."),(0,a.mdx)("li",{parentName:"ul"},"An offset table: the table is a sequence of ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32")," pairs, with a header",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"For the header, two ",(0,a.mdx)("inlineCode",{parentName:"li"},"uint32"),"s can be found: the length of the table, and the length of the startup code."),(0,a.mdx)("li",{parentName:"ul"},"For the pairs, they represent the offset in the file and the length of code module, in bytes."))),(0,a.mdx)("li",{parentName:"ul"},"Each of the modules, finished by a null byte (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\0"),").")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"` 0                   1                   2                   3                   4                   5                   6\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          Magic number                         |                          Header size                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                       Startup code size                       |                        Module 0 offset                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        Module 0 length                        |                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                                                               +\n|                                                                                                                               |\n+                                                              ...                                                              +\n|                                                                                                                               |\n+                                                               +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |                        Module n offset                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        Module n length                        | Module 0 code | Module 0 code |      ...      |       \\0      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Module 1 code | Module 1 code |      ...      |       \\0      |                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                                                               +\n|                                                                                                                               |\n+                                                              ...                                                              +\n|                                                                                                                               |\n+                                                               +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               | Module n code | Module n code |      ...      |       \\0      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+`\n")),(0,a.mdx)("p",null,"This structure is optimal for an environment that is able to load all code in memory at once:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"By using the offset table, one can load any module in constant time, where the code for module ",(0,a.mdx)("inlineCode",{parentName:"li"},"x")," is located at ",(0,a.mdx)("inlineCode",{parentName:"li"},"file[(x + 3) * sizeof(uint32)]"),". Since there is a null character (",(0,a.mdx)("inlineCode",{parentName:"li"},"\\0"),") separating all modules, usually length does not even need to be used, and the module can be loaded directly as an ASCIIZ string."),(0,a.mdx)("li",{parentName:"ul"},"Startup code is always found at ",(0,a.mdx)("inlineCode",{parentName:"li"},"file[sizeof(uint32)]"),".")),(0,a.mdx)("p",null,"This bundling is usually used by iOS."),(0,a.mdx)("h2",{id:"file-ram-bundle"},"File RAM bundle"),(0,a.mdx)("p",null,"Each module is stored as a file, with the name ",(0,a.mdx)("inlineCode",{parentName:"p"},"js-modules/${id}.js"),", plus an extra file called ",(0,a.mdx)("inlineCode",{parentName:"p"},"UNBUNDLE")," is created, which its only content is the magic number, ",(0,a.mdx)("inlineCode",{parentName:"p"},"0xFB0BD1E5"),". Note that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"UNBUNDLE")," file is created at the root.\nThis bundling is usually used by Android, since package contents are zipped, and access to a zipped file is much faster. If the indexed format was used instead, all the bundled should be unzipped at once to get the code for the corresponding module."))}h.isMDXComponent=!0}}]);