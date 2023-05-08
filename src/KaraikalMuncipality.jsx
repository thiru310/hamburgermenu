import React, { Component } from "react";
import "./css/style-main.css"

class KaraikalMunicipality extends React.Component{


    render(){
        return(
            <div>
            <header id="header" className="header">
  
  <div className="screen">
        
	<div className="container">			
        
        
       
                <div className="reset"><a href="#" title="Normal" className="reset">Reset</a></div>
           
                <div className="hight-contrast"><a href="#" title="High Contrast" className="hight-contrast" id="bw">B/W</a></div>
                <div className="font-small"><a href="#" title="Decrease font size" className="font-small" id="decfont"><sup>-</sup>A</a></div>
                <div className="font-normal"><a href="#" title="Reset font size" className="font-normal" id="norfont">A</a></div>
            	<div className="font-big"><a href="#" title="Increase font size" className="font-big" id="incfont"><sup>+</sup>A</a></div>
       <div className="skip"> <a className="down skip" href="#skipCont">Skip Main Content</a></div>
        <div className="screenreader"><a href="screenreader.php" className="screenreader">Screen Reader Access</a></div>
        </div>
       </div>
   
	
    <div className="header-middle p-0 bg-lightest xs-text-center">
      <div className="container pt-0 pb-0">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-6">
            <div className="widget no-border m-0">
              <a className="menuzord-brand pull-left flip xs-pull-center mb-15" href="index.php"><img src="images/logo-wide.png" alt=""/></a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-6">
            <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
              <ul className="list-inline">
                <li><img src="images/governor.png"/></li>
				<li><img src="images/cm.png"/></li>
              </ul>
            </div>
          </div>  
          
        </div>
      </div>
    </div>
     <div className="header-nav">
      <div className="header-nav-wrapper navbar-scrolltofixed bg-theme-colored border-bottom-theme-color-2-1px" style={{"zIndex": 1000}}>
        <div className="container">
          <nav id="menuzord" className="menuzord bg-theme-colored pull-left flip menuzord-responsive"><a href="#" className="showhide"><em></em><em></em><em></em></a>
            <ul className="menuzord-menu menuzord-indented scrollable" style={{'maxHeight': 400}}>
                    <li className="menu-item menu-item--active-trail">
        <a href="index.php" rel="">Home</a>
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="about-us.php" rel="">About Us<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                <ul className="dropdown" >
                    <li className="menu-item">
        <a href="about-us.php" rel="">About Karaikal Municipality</a>
              </li>
                <li className="menu-item">
        <a href="organisation-chart.php" rel="">Organisation Chart</a>
              </li>
                <li className="menu-item">
        <a href="wards.php" rel="">Wards</a>
              </li>
			  <li className="menu-item">
        <a href="images/act-and-rules/citizen-charter.pdf" target="_blank" rel="">Citizen Charter</a>
              </li>
        </ul>
  
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="" rel="">Services<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                               <ul className="dropdown">
                    <li className="menu-item">
        <a href="engineering-section.php" rel="">Engineering Section</a>
              </li>
                <li className="menu-item">
        <a href="revenue-section.php" rel="">Revenue Section</a>
              </li>
                <li className="menu-item">
        <a href="health-section.php" rel="">Health Section</a>
              </li>
                <li className="menu-item">
        <a href="birth-death-section.php" rel="">Birth and Death Section</a>
              </li>
                <li className="menu-item">
        <a href="establishment-accounts-section.php" rel="">Establishment &amp; Accounts</a>
              </li>
                <li className="menu-item">
        <a href="NULM.php" rel="">NULM</a>
              </li>
        </ul>
  
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="" rel="">Act &amp; Rule<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                              <ul className="dropdown" >
                    <li className="menu-item">
        <a href="images/act-and-rules/Puducherry Municipality Act 1973.pdf" target="_blank" rel="">Puducherry Municipality Act 1973</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Puducherry Municipality (Amendment) Act 2017.pdf" target="_blank" rel="">Puducherry Municipality (Amendment) 2017</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Environment protection act 1986.pdf" target="_blank" rel="">Environment Protection Act 1986</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Solid waste management rules 2016.pdf" target="_blank" rel="">Solid Waste Management 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/E-waste management rules.pdf" target="_blank" rel="">E-Waste Management 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/PWM Rules 2016.pdf" target="_blank" rel="">Plastic Waste Management Rule 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Biomedical waste rules.pdf" target="_blank" rel="">Biomedical Waste Management Rule 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Final%20HWM%20Rules%202016.pdf" target="_blank" rel="">Hazardous and Other Waste Rule 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/Construction &amp; Demolition waste rules 2016.pdf" target="_blank" rel="nofollow" className="0">Construction and Demolition Waste Rule 2016</a>
              </li>
                <li className="menu-item">
        <a href="images/act-and-rules/2016_11_18 RoW Policy.pdf" target="_blank" rel="">Communication and Connectivity Infrastructure Policy</a>
              </li>
			  
               
        </ul>
  
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="" rel="">Go's<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                              <ul className="dropdown" style={{'right': 'auto', 'display': 'none'}}>
                    <li className="menu-item">
        <a href="images/gos/Property Tax.pdf" target="_blank" rel="">GO Pertaining to Property Tax Revision</a>
              </li>
                <li className="menu-item">
        <a href="images/gos/Regularization of unapproved layout.pdf" target="_blank" rel="">Regularization of unapproved layout</a>
              </li>
                <li className="menu-item">
        <a href="images/gos/User Charges - SWM.pdf" target="_blank" rel="">User Charges - SWM</a>
              </li>
        </ul>
  
              </li>
                <li className="menu-item">
        <a href="tender.php" rel="" data-drupal-link-system-path="tender">Tenders</a>
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="" rel="">Gallery<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                               <ul className="dropdown" style={{"right": 0}}>
                    <li className="menu-item">
        <a href="photo-gallery.php" rel="" data-drupal-link-system-path="photo-gallery">Photo</a>
              </li>
                <li className="menu-item">
        <a href="video-gallery.php" rel="" data-drupal-link-system-path="video-gallery">Video</a>
              </li>
        </ul>
  
              </li>
                <li className="menu-item">
        <a href="rti.php" rel="" data-drupal-link-system-path="node/19">RTI</a>
              </li>
                <li className="menu-item">
        <a href="https://lgrams.py.gov.in/" target="_blank" rel="nofollow" className="0">Online Property Tax</a>
              </li>
			    <li className="menu-item menu-item--expanded">
        <a href="" target="_self" rel="" data-drupal-link-system-path="<front>" className="is-active">MIS<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                <ul className="dropdown" >
                    <li className="menu-item menu-item--expanded">
        <a href="" target="_self" rel="" data-drupal-link-system-path="<front>" className="is-active">Staff Management<span className="indicator"><i className="fa fa-angle-right"></i></span></a>
                                <ul className="dropdown">
                    <li className="menu-item">
        <a href="images/act-and-rules/Recruitment Rules.pdf" target="_self" rel="">Recruitment Rules</a>
              </li>
                <li className="menu-item">
        <a href="images/pdf/KM - Service Record as on 23-07-2018.pdf" target="_self" rel="">Service Records</a>
              </li>
                <li className="menu-item">
        <a href="images/pdf/Karaikal municipality Seniority_List.pdf" target="_blank" rel="">Seniority List</a>
              </li>
                <li className="menu-item">
        <a href="http://www.freeonlinerealsoft.com/ " target="_blank" rel="nofollow" className="0">Biometric Attendance</a>
              </li>
                <li className="menu-item">
        <a href="http://esalary.pon.nic.in/" target="_blank" rel="nofollow" className="0">Salaries &amp; Wages</a>
              </li>
                <li className="menu-item">
        <a href="https://pgportal.gov.in/cpgoffice/" target="_blank" rel="nofollow" className="0">Employee Grievances</a>
              </li>
        </ul>
  
              </li>
                <li className="menu-item menu-item--expanded">
        <a href="" target="_self" rel="" data-drupal-link-system-path="<front>" className="is-active">Project Management<span className="indicator"><i className="fa fa-angle-right"></i></span></a>
                                <ul className="dropdown">
                    <li className="menu-item">
        <a href="images/pdf/KM - Financial and Physical Progress as on 23-07-2018.pdf" target="_blank" rel="">Financial &amp; Physical Progress</a>
              </li>
                <li className="menu-item">
        <a href="https://pudutenders.gov.in/nicgep/app " target="_blank" rel="nofollow" className="0">e-Tenders</a>
              </li>
        </ul>
  
              </li>
        </ul>
  
              </li>
                <li className=" menu-item menu-item--expanded">
        <a href="" rel="">Forms<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                              <ul className="dropdown" >
                    <li className="menu-item menu-item--expanded">
        <a href="" rel="">Downloads<span className="indicator"><i className="fa fa-angle-right"></i></span></a>
                                <ul className="dropdown" >
                    <li className="menu-item">
        <a href="images/forms/Birth Form for Adopted child.pdf" target="_blank" rel="">Birth Form for Adopted child</a>
              </li>
                <li className="menu-item">
        <a href="images/forms/Birth form.pdf" target="_blank" rel="">Birth form</a>
              </li>
                <li className="menu-item">
        <a href="images/forms/Death form.pdf" target="_blank" rel="">Death form</a>
              </li>
                <li className="menu-item">
        <a href="images/forms/Registration of Marriage.pdf" target="_blank" rel="">Registration of Marriage</a>
              </li>
                <li className="menu-item">
        <a href="images/forms/Still Birth Form.pdf" target="_blank" rel="">Still Birth Form</a>
              </li>
        </ul>
  
              </li>
			
                <li className="menu-item menu-item--expanded">
        <a href="forms.php">Online Forms</a>
                              
  
              </li>
        </ul>
  
              </li>
                <li className="menu-item">
        <a href="contact-us.php" rel="">Contact Us</a>
              </li>
        <li className="scrollable-fix"></li></ul>
            
           
          </nav>
        </div>
      </div><div></div>
    </div> 
  </header>
  </div>
        )
    }
}

export default KaraikalMunicipality;