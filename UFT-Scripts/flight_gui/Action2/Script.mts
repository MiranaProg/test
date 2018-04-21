
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity_2").Select DataTable("flyfrom", dtLocalSheet) @@ hightlight id_;_2016798912_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("flyto", dtLocalSheet) @@ hightlight id_;_2016800928_;_script infofile_;_ZIP::ssf35.xml_;_


WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage").Click 9,12 @@ hightlight id_;_1907071560_;_script infofile_;_ZIP::ssf37.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("flightdate", dtLocalSheet)
RunAction "classSelection", oneIteration
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select RandomNumber(1, 11)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
x=RandomNumber (0,5)
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell x, 4
flighttext_1 = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").GetCellData (x, 4)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
flighttext_2 = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("16829 SR").GetROProperty("Text")
If StrComp(flighttext_1,flighttext_2)=0 Then
 	
	msgbox "both the flight text are identical " & VBNewLine & "flighttext_1  "& flighttext_1 & VBNewLine & "flighttext_2  " & flighttext_2 
	Else 
		msgbox "test fail flight text is different",flighttext_1,flighttext_2
End If
RunAction "TickectPriceValidation", oneIteration
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set DataTable("PassengerName", dtLocalSheet) @@ hightlight id_;_1909827824_;_script infofile_;_ZIP::ssf49.xml_;_


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1973593648_;_script infofile_;_ZIP::ssf93.xml_;_
Wait(3) @@ hightlight id_;_2060261704_;_script infofile_;_ZIP::ssf94.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order").Output CheckPoint("Order") @@ hightlight id_;_2064870704_;_script infofile_;_ZIP::ssf96.xml_;_


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
 @@ hightlight id_;_1886867608_;_script infofile_;_ZIP::ssf79.xml_;_



