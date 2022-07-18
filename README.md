# redmine_issue_clipboard

Redmine plugin which allows you to copy commit message to clipboard with just one click. 

## How does it work ?

After installation (see below) plugin inserts small icon next to issue. When you click on this icon message like this will be copied
to your clipboard:

```
refs #123
Prepare better documentation
```

Where *refs* is first word from *Referencing keywords* (can be found in Administration -> Settings -> Repositories tab),
and *#123* as well as *Prepare better documentation* are of course issue number a title. That's it! 

## Installation

Just clone or copy this repository in `plugins` directory inside your Redmine installation and restart server. 

## License

MIT

## Contribution

I'll be happy to accept pull requests.

### Resources used

* Excellent [clipboard](https://github.com/zenorocha/clipboard.js) library

### Development ideas
* tests, including browser based
* configuration: template for content & selectable keyword
