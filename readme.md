# Automated accessibility testing tools

## Pa11y

[Pa11y is a command line tool](https://github.com/pa11y/pa11y) that you can use to scan a web address for a quick accessibility report.

The difference between Axe-core and Pa11y is that Axe-core needs a browser to work, while Pa11y starts up its own headless browser ([DWP source](https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-axe-core-and-pageTest#:~:text=To%20run%20axe%2Dcore%2C%20pass,and%20found%20to%20be%20ok)). Pa11y can run Axe-core if you need it to.

Install Pa11y globally with

`npm install -g pa11y`

For a report to the command line, run pa11y with the URI you want to test:

`pa11y https://www.gov.uk`

### Testing local files
If you’re working locally, you can either run pa11y with an absolute path to a html file (pa11y will show what path it’s using to reach the file) or use a localhost address if there is server side processing involved in serving the html

```
pa11y ./index.html
pa11y http://localhost:8080/my-page.html
```

### Generating a report

To save pa11y output, run pa11y with the report option and save the output to a csv, which can be opened in google sheets.

`pa11y --reporter csv https://www.the-race.com/ > report.csv`

### Using multiple ’test runners’

Pa11y doesn’t run axe by default but you can ask it to use both axe-core and HTML Code Sniffer for a full check. If you do this you are likely to get duplicates of errors in your code, as the output from the runners is in different formats.

`pa11y --runner axe --runner htmlcs https://www.gov.uk`

## Axe-core

[Axe-core](https://github.com/dequelabs/axe-core)’s tests run within your custom environment.

