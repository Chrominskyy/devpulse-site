# DevPulse website

Public product website for DevPulse, an Azure DevOps client for macOS, iOS and
iPadOS. The application source is maintained separately in
[Chrominskyy/psychic-giggle](https://github.com/Chrominskyy/psychic-giggle).

Hosted at https://chrominskyy.github.io/devpulse-site/ using GitHub Pages.

This site uses plain HTML, CSS and JavaScript with local assets and no build
step, analytics, tracking, cookies or third-party font services.

Preview locally:

```sh
python3 -m http.server 8765
```

Then open <http://localhost:8765/>.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Product page |
| `support.html` | Setup guide, permissions and troubleshooting |
| `privacy.html` | Privacy policy |
| `assets/style.css` | All styling, including responsive and reduced-motion rules |
| `assets/site.js` | Scroll reveal only. The page works without it. |
| `assets/fonts/` | Self-hosted Geist and JetBrains Mono (SIL Open Font License) |
| `assets/*.webp`, `assets/*.jpg` | Product screenshots and widget renders |

Icons are inlined in the HTML as Phosphor paths, so no icon font or sprite
request is made.

Images are served as WebP with a JPEG fallback through `<picture>`.

## Screenshots and widget renders

The application screenshots are the real interface, captured from the app with
synthetic data. Organizations, projects, runs, task names, work item titles and
people are fictional. The captured mouse pointer was removed from the images.

The desktop widget images are renders of the production WidgetKit views, using
the app's own sample data.

## Publishing

The `Deploy site to GitHub Pages` workflow publishes `main` to GitHub Pages.
It requires Pages to be set to build from the GitHub Actions source in the
repository settings.

## Support and community

Use [Issues](https://github.com/Chrominskyy/devpulse-site/issues/new/choose) for
bugs, feature requests and questions. Pull requests require approval from @Chrominskyy before merging to the protected
main branch. Discussions, Wiki, Projects and commit comments are disabled.
The repository owner can bypass the branch rules for direct maintenance.

- [Contribution and support guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security policy and private vulnerability reporting](SECURITY.md)
- [Copyright and licensing](LICENSE)

Issues and attachments are public. Never post PATs, tokens, authorization headers,
private organization/project details, pipeline logs or work-item content.

## iPhone Duo

The iOS app includes an unfolded iPhone Duo layout. Work Items browsing and item
details were verified on the iOS 27.1 simulator with PAT authentication. This is
simulator verification, not physical-device validation.

## Availability

DevPulse is being prepared for the Mac App Store and is not yet publicly
available there. Update the availability copy and add the official App Store
link after a public release.

## Third-party materials

Original website materials are all rights reserved; this repository does not
license the application source. Fonts and icons keep their own licenses.
