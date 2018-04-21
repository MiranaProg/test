
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set DataTable("agentname", dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure DataTable("password", dtLocalSheet) @@ hightlight id_;_2066450792_;_script infofile_;_ZIP::ssf4.xml_;_
 a = WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").GetROProperty("enabled")
msgbox a
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click

