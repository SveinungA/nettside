# Publication sources and review notes

Checked: 25 October 2026.

## Scope and collection

The website contains the 25 journal articles listed in the NORCE and UiB profiles. The import excludes chapters, reports, talks, reviews, theses, and duplicate preprints. It is not claimed to be a complete export of Google Scholar.

- Google Scholar profile: https://scholar.google.com/citations?user=xz8JwjAAAAAJ
- Direct retrieval of Google Scholar returned HTTP 429; the profile could be identified, but its full publication table could not be scraped reliably.
- Discovery: https://www.norceresearch.no/en/persons/sveinung-arnesen/977 and https://www4.uib.no/finn-ansatte/sveinung.arnesen
- Detailed institutional metadata: the public NVA JSON API, requested with `Accept: application/json`.
- DOI, authors, journal, volume, issue, pages, and dates: publisher-deposited Crossref metadata, checked against NVA.
- A retrospective DOI was recovered for the 2011 Norwegian article on information, motivation, and prediction.

## Open versions

17 entries have an institutional open-version link. An NVA `OpenFile` with an allowed `download` operation is used as evidence; these are not merely abstract or DOI links. The two BORA handles redirect to records containing open files. No full-text PDFs have been copied into this repository.

A missing open-version link means that an open copy was not verified during this pass, not that the paper necessarily requires payment. Some older publisher pages or databases may expose additional copies.

## Date policy and unresolved details

- Use the journal issue year when Crossref supplies it. Preserve the online-first year separately and show it on the website when it precedes the issue year.
- This moves several entries relative to their institutional online-first records: *Do Polls Influence Opinions?* and *The Legitimacy of Representation* use 2018; *Explaining variance* uses 2019; *How to be Gracious* uses 2023; *Beyond the Ballot* and *Knowledge and support for AI* use 2025.
- The Journal of Prediction Markets papers retain their issue years (2011 and 2014). The publisher pages show later electronic publication dates (2012 and 2015), which are retained in the structured data but not described as earlier online-first dates.
- **Author review requested:** *Accuracy and bias in European prediction markets* is recorded in NVA as 2013, volume 25(2), pp. 123–138. The older authored UiB bibliography and a later coauthor paper use 2015. The draft retains the institutional issue year 2013 and records this discrepancy rather than inventing a resolution.
- *Artificial Intelligence in Government Weakens Citizens’ Affective Ties With Public Employees* is an advance online article in the retrieved publisher metadata; no issue or volume has been invented.
- Two papers have no verified DOI in this pass: *Sosial forankring og aktivt medlemskap i frivillige organisasjoner* and *Accuracy and bias in European prediction markets*. They link to their institutional records.
- NVA contains both a 2022 conference presentation and a 2023 journal article named *Look to Denmark or not?*. The imported record is the 2023 journal article, not the presentation.
- Obvious title-import defects in the Norwegian Crossref records (a missing space and an acknowledgement footnote embedded in a subtitle) were corrected using the NVA titles.
- Coauthor names follow the publication metadata. The reversed NVA name “Strijbis Oliver” has been normalised to “Oliver Strijbis”.

## Per-article provenance

| Year | Article | DOI / record | Open version |
| --- | --- | --- | --- |
| 2026 | Artificial Intelligence in Government Weakens Citizens’ Affective Ties With Public Employees: Results From a Vignette Experiment | [DOI](https://doi.org/10.1177/08944393261461566) | [Repository](https://nva.sikt.no/registration/019f467a0642-5643241d-1e21-49e2-b28b-1dbab75c7e65) |
| 2026 | Transparency, neutrality, voice, and respect: How procedural fairness considerations affect AI acceptability in algorithmic societies | [DOI](https://doi.org/10.1016/j.techsoc.2026.103398) | [Repository](https://nva.sikt.no/registration/019ed4617686-9a8399a8-c070-4396-b10a-5bdf26368c08) |
| 2025 | Beyond the Ballot: The Impact of Voting Margin and Turnout on the Legitimacy of Referendum Outcomes in Europe | [DOI](https://doi.org/10.1177/00323217241266025) | [Repository](https://nva.sikt.no/registration/0198cc692843-78a13066-6e63-4bb5-bdf4-5196a5026029) |
| 2025 | Knowledge and support for AI in the public sector: a deliberative poll experiment | [DOI](https://doi.org/10.1007/s00146-024-02104-w) | [Repository](https://nva.sikt.no/registration/0198cc6392cc-6acbb88b-4c7e-47bf-a298-83617f997b92) |
| 2025 | Trustees, Delegates, and Direct Democracy: Exploring Mass‐Elite Incongruence in Perceptions of Advisory Referendums | [DOI](https://doi.org/10.1111/1467-9477.70011) | [Repository](https://nva.sikt.no/registration/0198cc64d9e8-86a49e3f-c974-4e0a-b290-7ecb7a8ebc28) |
| 2023 | Look to Denmark or not? An experimental study of the Social Democrats’ strategic choices | [DOI](https://doi.org/10.1016/j.electstud.2023.102629) | [Repository](https://nva.sikt.no/registration/0198cc831f2a-dc4a924d-2f60-4c2e-95bc-f7ebc98b2a2d) |
| 2023 | How to be Gracious about Political Loss—The Importance of Good Loser Messages in Policy Controversies | [DOI](https://doi.org/10.1177/00104140221109433) | [Repository](https://nva.sikt.no/registration/0198cc71729f-81c91589-44f4-4136-abaa-9de96913adb8) |
| 2023 | Beyond the Myth of Legality? Framing Effects and Public Reactions to High Court Decisions in Europe | [DOI](https://doi.org/10.1177/00104140231152769) | [Repository](https://nva.sikt.no/registration/0198cc4e1b12-802aa3f0-4fc9-41fb-abe0-e590abd065b7) |
| 2021 | Support for electoral system reform among voters and politicians: Studying information effects through survey experiments | [DOI](https://doi.org/10.1016/j.electstud.2021.102313) | [Repository](https://nva.sikt.no/registration/0198cc8ae0ce-e71353a8-ac43-41a1-a5f7-b75b0b568d05) |
| 2019 | Conditional legitimacy: How turnout, majority size, and outcome affect perceptions of legitimacy in European Union membership referendums | [DOI](https://doi.org/10.1177/1465116518820163) | [Repository](https://nva.sikt.no/registration/0198cc3ef4a2-76174b99-f06e-4e7f-ab0d-787581e148fa) |
| 2019 | Do citizens make inferences from political candidate characteristics when aiming for substantive representation? | [DOI](https://doi.org/10.1016/j.electstud.2018.10.005) | [Repository](https://nva.sikt.no/registration/0198cc4597f8-c170b42b-b563-45f9-acf3-ac8c378606d2) |
| 2019 | Påvirker det å bli informert om konsekvenser av endringer i stortingvalgordningen velgernes holdninger til den? En surveyeksperimentell tilnærming | [DOI](https://doi.org/10.18261/issn.1504-2936-2019-02-01) | Not verified |
| 2019 | Påvirker innvandringsscenarier nordmenns holdninger til innvandrere? Et surveyeksperiment | [DOI](https://doi.org/10.18261/issn.1504-291X-2019-02-01) | [Repository](https://nva.sikt.no/registration/0198cc482164-f8c784c1-edfa-47a0-a3f7-737511983a91) |
| 2019 | Explaining variance in the accuracy of prediction markets | [DOI](https://doi.org/10.1016/j.ijforecast.2018.04.009) | Not verified |
| 2018 | Could information about herd immunity help us achieve herd immunity? Evidence from a population representative survey experiment | [DOI](https://doi.org/10.1177/1403494818770298) | Not verified |
| 2018 | Do Polls Influence Opinions? Investigating Poll Feedback Loops Using the Novel Dynamic Response Feedback Experimental Procedure | [DOI](https://doi.org/10.1177/0894439317731721) | [Repository](https://nva.sikt.no/registration/0198cc94b879-57f1ad38-61ef-43a5-8243-1fd1e39c2dd1) |
| 2018 | The Legitimacy of Representation: How Descriptive, Formal, and Responsiveness Representation Affect the Acceptability of Political Decisions | [DOI](https://doi.org/10.1177/0010414017720702) | [Repository](https://nva.sikt.no/registration/0198cc57a377-ac673c5b-c776-4b4e-ac7d-a33444aed53c) |
| 2017 | Legitimacy from Decision-Making Influence and Outcome Favourability: Results from General Population Survey Experiments | [DOI](https://doi.org/10.1177/0032321716667956) | Not verified |
| 2016 | Sosial forankring og aktivt medlemskap i frivillige organisasjoner | [NVA record](https://nva.sikt.no/registration/0198cc7f9af6-ed2bb64c-9a8a-46ae-aae8-8470df690385) | Not verified |
| 2016 | Using prediction market data for measuring the expected closeness in electoral research | [DOI](https://doi.org/10.1016/j.electstud.2016.07.006) | Not verified |
| 2014 | Prediction markets vs polls – an examination of accuracy for the 2008 and 2012 elections | [DOI](https://doi.org/10.5750/jpm.v8i3.981) | [Repository](https://nva.sikt.no/registration/0198cc624824-6dcdb5aa-1f71-40e6-830f-ee544a8d7211) |
| 2013 | Accuracy and bias in European prediction markets | [NVA record](https://nva.sikt.no/registration/0198cc40589a-a6c10f05-10f4-4b8e-a135-42ddab0baa37) | Not verified |
| 2012 | Forecasting Norwegian elections: Out of work and out of office | [DOI](https://doi.org/10.1016/j.ijforecast.2012.04.009) | [Repository](https://hdl.handle.net/1956/7570) |
| 2011 | How prediction markets help us understand events’ impact on the vote in US Presidential Elections | [DOI](https://doi.org/10.5750/jpm.v5i3.492) | [Repository](https://hdl.handle.net/1956/7569) |
| 2011 | Informasjon, motivasjon, prediksjon – Eit forsøk med prediksjonsmarknad før stortingsvalet 2009 | [DOI](https://doi.org/10.18261/issn1504-291x-2011-01-04) | Not verified |

Every entry in `data/publications.json` records the source URLs, check date, online year, institutional year, and open-file evidence. The publication pages and BibTeX export are generated locally from that one file.

## Biography and project sources

- NORCE profile: research professor title, ESS role, and current NORCE email.
- UiB profile: professor title, department, university email, teaching, and publications.
- Original repository `content/home/about.md`: PhD in Comparative Politics, University of Bergen, 2012.
- fAIrgov: https://www.norceresearch.no/en/projects/public-fairness-perceptions-of-algorithmic-governance (completed, August 2021–July 2025).
- SCORE: https://www.norceresearch.no/en/projects/understanding-societal-conflict-in-consumption-reduction-score (active, December 2023–June 2028; Gisle Andersen is the project contact/leader, and Sveinung Arnesen is a project member).
- The four original project descriptions were condensed for the research page. Unpublished proposals and private project discussions have not been used as public website content.
