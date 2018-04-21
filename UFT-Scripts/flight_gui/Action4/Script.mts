bool=true
Do Until bool=false

a = inputBox ("enter the class E/F/B")
Select case a
     case "E" @@ hightlight id_;_2021783104_;_script infofile_;_ZIP::ssf1.xml_;_
     WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Economy" @@ hightlight id_;_2021788864_;_script infofile_;_ZIP::ssf3.xml_;_
     bool=false
   case "F" 
	 WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "First"
	 bool=false
   case "B"
	 WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business"
	 bool=false
   case else
	 MsgBox "incorrect input try again",vbRetryCancel
	    bool=true
End select
Loop 


	
 

	

	



