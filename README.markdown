Description of the problem
==========================

Use of a custom JavaScript function to enable or disable a number of checkboxes by class name, using JQuery 1.4, appears to have different behaviour when called inside a Lift app then when called outside a Lift app.

Running the example
===================

This Lift 2.3 SBT project contains:

 * static.html - a hand-crafted minimal HTML file which when opened in a browser will load JQuery from Google's CDN, load src/main/webapp/foo.js and will function as expected.  That is, checking any checkbox will toggle all the check boxes on the page.
 
 * the lift_xhtml - default lift app (sbt jetty-run) which contains the use of the above function which does not work as expected. It seems as if the checking of the checkbox produces a different value compared to static.html 
 
 * out.html - which is the lift app index page cURLed to the file system, with links to jquery and foo.js corrected to access these files from 127.0.0.1:8080.  Open this in a browser (e.g., open out.html on a Mac) and the checkboxes function as expected.
 
 * mk_outside_lift.sh - the script to create out.html
 
 