(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{569:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"sonic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonic"}},[s._v("#")]),s._v(" Sonic")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("h3",{attrs:{id:"安装-sonic-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-sonic-server"}},[s._v("#")]),s._v(" 安装 "),n("a",{attrs:{href:"https://github.com/valeriansaliou/sonic",target:"_blank",rel:"noopener noreferrer"}},[s._v("sonic-server"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("使用 root 用户执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rustc "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装 rust")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential clang libclang-dev libc6-dev g++ llvm-dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("请查看 "),n("a",{attrs:{href:"https://mirrors.ustc.edu.cn/help/crates.io-index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("此文档"),n("OutboundLink")],1),s._v(" 更换到 USTC Crates 源后，执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("cargo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sonic-server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"安装-sonic-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-sonic-插件"}},[s._v("#")]),s._v(" 安装 sonic 插件")]),s._v(" "),n("p",[s._v("使用 root 用户执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hydrooj/sonic\nhydrooj addon "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hydrooj/sonic\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("/root/.sonic/config.cfg")]),s._v("（没有的自行建立，也可以换成其他的你喜欢的路径）按照以下配置示例写入配置。")]),s._v(" "),n("p",[s._v("配置示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# Sonic\n# Fast, lightweight and schema-less search backend\n# Configuration file\n# Example: https://github.com/valeriansaliou/sonic/blob/master/config.cfg\n\n\n[server]\n\nlog_level = "error"\n\n\n[channel]\n\ninet = "127.0.0.1:1491" # 默认监听本机\ntcp_timeout = 300\n\nauth_password = "SecretPassword"\n\n[channel.search]\n\nquery_limit_default = 10\nquery_limit_maximum = 100\nquery_alternates_try = 4\n\nsuggest_limit_default = 5\nsuggest_limit_maximum = 20\n\n\n[store]\n\n[store.kv]\n\npath = "/data/sonic/store/kv/"\n\nretain_word_objects = 1000\n\n[store.kv.pool]\n\ninactive_after = 1800\n\n[store.kv.database]\n\nflush_after = 900\n\ncompress = true\nparallelism = 2\nmax_files = 100\nmax_compactions = 1\nmax_flushes = 1\nwrite_buffer = 16384\nwrite_ahead_log = true\n\n[store.fst]\n\npath = "/data/sonic/store/fst/"\n\n[store.fst.pool]\n\ninactive_after = 300\n\n[store.fst.graph]\n\nconsolidate_after = 180\n\nmax_size = 2048\nmax_words = 250000\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br")])]),n("p",[s._v("执行如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pm2 start sonic -- -c /root/.sonic/config.cfg\npm2 save\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("h3",{attrs:{id:"后端地址配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端地址配置"}},[s._v("#")]),s._v(" 后端地址配置")]),s._v(" "),n("p",[s._v("进入 HydroOJ 控制面板，配置 sonic 后端地址。")]),s._v(" "),n("p",[s._v("如果您直接复制配置示例，那么按照以下内容配置：")]),s._v(" "),n("ul",[n("li",[s._v("host: "),n("code",[s._v("127.0.0.1")])]),s._v(" "),n("li",[s._v("port: "),n("code",[s._v("1491")])]),s._v(" "),n("li",[s._v("auth: "),n("code",[s._v("SecretPassword")])])]),s._v(" "),n("p",[s._v("修改完成后，重启 HydroOJ。")]),s._v(" "),n("h3",{attrs:{id:"重启-hydrooj"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启-hydrooj"}},[s._v("#")]),s._v(" 重启 HydroOJ")]),s._v(" "),n("p",[s._v("执行命令 "),n("code",[s._v("pm2 restart hydrooj")]),s._v("。")]),s._v(" "),n("h3",{attrs:{id:"重建题目索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重建题目索引"}},[s._v("#")]),s._v(" 重建题目索引")]),s._v(" "),n("p",[s._v("进入 HydroOJ 控制面板，在脚本管理中找到重建题目索引，点击运行，参数留空即可。")]),s._v(" "),n("p",[s._v("至此，搜索功能应当可以正常使用。")]),s._v(" "),n("h2",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[s._v("#")]),s._v(" FAQ")]),s._v(" "),n("h3",{attrs:{id:"sonic-server-安装时卡在-librocksdb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonic-server-安装时卡在-librocksdb"}},[s._v("#")]),s._v(" sonic-server 安装时卡在 librocksdb")]),s._v(" "),n("p",[s._v("考虑换台性能强点的服务器。")]),s._v(" "),n("h3",{attrs:{id:"安装后题目搜索不正常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装后题目搜索不正常"}},[s._v("#")]),s._v(" 安装后题目搜索不正常")]),s._v(" "),n("p",[s._v("请更新到 HydroOJ 最新版本后，再运行重建题目索引。")])])}),[],!1,null,null,null);a.default=e.exports}}]);