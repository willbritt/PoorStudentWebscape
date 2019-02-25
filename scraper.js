function injectD3()
{
  //this allows us to inject the D3 library for use

  var s = document.createElement("script");
  s.src="https://d3js.org/d3.v5.js"
  var body = document.getElementsByTagName("body")[0]
  body.after(s);
}

function getMajors()
{
  //this gets the majors, minors, and specializations available at Centre

  var classes = d3.selectAll(".fusion-text a").nodes()
}

function getCourses()
{
  //this gets the courses available in the CS department

  var courses = d3.selectAll("#main ul li").nodes()
}

function getUKMajors()
{
  //this gets the majors at the University of Kentucky
  //http://www.uky.edu/academics/2017-18-major-sheet-inventory

  d3.selectAll("ul li").nodes()
}

function LouisvilleMajors()
{
  //this gets all the majors from the University of Louisville Majors

  d3.selectAll("tr td:first-child").nodes()
}
