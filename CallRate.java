package first.com;
//prog to analyze better call rates....
	
 class Plan2 
 {
	 long callrate1,callrate2;//for comm
	 
	 int callsec1,callsec2;
	 
    
	 public Plan2() {
		// TODO Auto-generated constructor stub
		 this.callrate1= 2100;
		 this.callrate2=5400;
		 this.callsec1=0;
		 this.callsec2=0;
			
	}
	 
	 void charges()
	 {
		 System.out.println("sec\tPlan1\tPlan2");
		 int i=0;
		 while(callrate1 != callrate2)
		 {
			 
			 callrate1=callrate1-1;
			 callsec1++;
			 callsec2++;
			 if(callsec2==61)
			 {
				 callrate2=callrate2-72;
				 callsec2=0;
			 }
			
			 
			
			 System.out.println( i +"\t" + callrate1 + "P" + "\t" + callrate2 + "P");
			 i++;
		 }
	 }
	 
	 
 }
 

public class CallRate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		Plan2 p2=new Plan2();
		p2.charges();
	
	}

}

//output:- stop at 18299sec	-16200P	-16200P
