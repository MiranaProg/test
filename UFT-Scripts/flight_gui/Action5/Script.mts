tickets=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("members").GetROProperty("Text") @@ hightlight id_;_1924455856_;_script infofile_;_ZIP::ssf1.xml_;_
ticketPrice=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("perticketPrice").GetROProperty("Text")

validate=tickets * CDbl(ticketPrice)

total=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("totalPrice").GetROProperty("Text") @@ hightlight id_;_1924473632_;_script infofile_;_ZIP::ssf3.xml_;_
MsgBox CDbl(ticketPrice)
If validate=CDbl(total) Then

    Reporter.ReportEvent micPass, " validation" ,"Successful" & VBNewLine & "total ammount is " & validate
	else
	Reporter.ReportEvent micFail, " validation" ,"wrong data calculation"
End If
