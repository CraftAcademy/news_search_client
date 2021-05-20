# Plan
- PR
- Tests: intercept request
- fill form, test for first title, displays 5 articles
- 

## Midcourse Exam Challenge Revisited - News Search

We live in exciting times!

You are challenged with creating a feature that allows the users to search for News articles online.

We have prepared the basic user interface for you. Your task is to make a call to the News API and retrieve news articles on whatever the user inputs in the search field.

You will fork this repository and then clone down the forked repository to your local computer. Then you need to create a feature branch before you start with the actual challenge. When you feel that you are done, make a pull request towards this repository.

Once you feel that you are finished with the coding challenge you need to open up the `writtenExam.md` and answer the question there.

![](gh_search_basic_ui.png)

### Resources
You will be using the News API to fetch the articles. You will have to sign up for a free account with tthe service. Please remember that you should NOT check in your API KEY in a public GitHub repository. Either use enviromental variables and `gitignore`, or simply remove the api key befor checking in your code.

- News API Documentation: https://newsapi.org/
- Getting started: https://newsapi.org/docs/get-started
- Postman: https://www.postman.com/


### Tests
This repository has been equipped with Cypress for E2E tests. You will get extra scores for adding component tests (using Jest and Enzyme)

To run the test suite, execute:
```
$ yarn cypress
```

### Your exam
The facilitator will inform you how much time you have to complete the task. You are free to use any resources you deem necessary. We will observe your workflow as well as assess the quality of your code and tests.

Good luck!

### Example response
The search for "Biden" yields the results that we added to the fixture file.

http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=<API_KEY>
```json
{
  "status": "ok",
  "totalResults": 31672,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Vanguard"
      },
      "author": "Rasheed Sobowale",
      "title": "US: Harris under scrutiny for tough-on-crime prosecutor past",
      "description": "While many will hail the choice of Kamala Harris as Joe Biden’s running mate, the US senator from California has come under tough criticism — but also been praised — over her past work as a top prosecutor. Harris, the first woman and the first black attorney …",
      "url": "https://www.vanguardngr.com/2020/08/us-harris-under-scrutiny-for-tough-on-crime-prosecutor-past/",
      "urlToImage": "https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/08/Kamala-Harris-Biden.jpg?fit=1200%2C630&ssl=1",
      "publishedAt": "2020-08-12T04:51:00Z",
      "content": "JOE BIDEN and KAMALA HARRIS. PHOTO: Brian Cahn/ZUMA Wire\r\nWhile many will hail the choice of Kamala Harris as Joe Biden’s running mate, the US senator from California has come under tough criticism —… [+4383 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minneapolis Star Tribune"
      },
      "author": "ELANA SCHOR",
      "title": "Harris brings Baptist, interfaith roots to Democratic ticket",
      "description": "Follow the StarTribune for the news, photos and videos from the Twin Cities and beyond.",
      "url": "https://www.startribune.com/harris-brings-baptist-interfaith-roots-to-democratic-ticket/572084632/",
      "urlToImage": "https://assets.startribune.com/static/img/branding/logos/strib-social-card.png?d=1597078316",
      "publishedAt": "2020-08-12T04:50:03Z",
      "content": "Kamala Harris, tapped on Tuesday as Joe Biden's running mate, attended services at both a Black Baptist church and a Hindu temple growing up an interfaith background that reflects her historic status… [+2915 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vanguard"
      },
      "author": "Rasheed Sobowale",
      "title": "Trump says ‘surprised’ at Biden’s pick of ‘horrible’ Harris",
      "description": "President Donald Trump on Tuesday called Kamala Harris the “most horrible” member of the US Senate and said he was “surprised” Joe Biden had picked her as his vice presidential candidate. Trump told reporters at the White House that Harris did not impress him…",
      "url": "https://www.vanguardngr.com/2020/08/trump-says-surprised-at-bidens-pick-of-horrible-harris/",
      "urlToImage": "https://i0.wp.com/www.vanguardngr.com/wp-content/uploads/2020/05/28945254-8367085-image-a-15_1590696618313.jpg?fit=962%2C669&ssl=1",
      "publishedAt": "2020-08-12T04:49:55Z",
      "content": "Trump\r\nPresident Donald Trump on Tuesday called Kamala Harris the “most horrible” member of the US Senate and said he was “surprised” Joe Biden had picked her as his vice presidential candidate.\r\nTru… [+476 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.bt.dk"
      },
      "author": "hoeg@berlingskemedia.dk (Henning Høeg)",
      "title": "Joe Bidens nye partner: 'Dele-mor' til to",
      "description": "Læs mere her.",
      "url": "https://www.bt.dk/udland/joe-bidens-nye-partner-dele-mor-til-to",
      "urlToImage": "https://bt.bmcdn.dk/media/cache/resolve/image_960x545/image/152/1524630/23493230-usa-electionbiden-harris.jpg",
      "publishedAt": "2020-08-12T04:49:00Z",
      "content": "Jore Bidens vicepræsidentkandidat, Kamala Harris er enestående på mange måder.\r\nIkke alene er den 55-årige senator fra Californien den første sorte kvinde, der officielt stiller op til jobbet som USA… [+4945 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Toronto Star"
      },
      "author": "Elana Schor - The Associated Press",
      "title": "Harris brings Baptist, interfaith roots to Democratic ticket",
      "description": "Kamala Harris, tapped on Tuesday as Joe Biden’s running mate, attended services at both a Black Baptist church and a Hindu temple growing up – an inte...",
      "url": "https://www.thestar.com/news/world/us/2020/08/12/harris-brings-baptist-interfaith-roots-to-democratic-ticket.html",
      "urlToImage": "https://images.thestar.com/Qgfu-6j_AxWCcBv5bcuSGG3JrMU=/1280x1024/smart/filters:cb(1597207947928)/https://www.thestar.com/content/dam/thestar/news/world/us/2020/08/12/harris-brings-baptist-interfaith-roots-to-democratic-ticket/NYPS205-811_2019_111553.jpg",
      "publishedAt": "2020-08-12T04:47:47Z",
      "content": "Kamala Harris, tapped on Tuesday as Joe Bidens running mate, attended services at both a Black Baptist church and a Hindu temple growing up an interfaith background that reflects her historic status … [+3239 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Portfolio.hu"
      },
      "author": "Portfolio.hu",
      "title": "Megvan Joe Biden alelnökjelöltje",
      "description": "Kamala Harris kaliforniai szenátor lesz Joe Biden, a demokraták várható elnökjelöltjének alelnökjelöltje - jelentette be kedden délután Delaware-ban kiadott közleményében Biden kampánycsapata.",
      "url": "https://www.portfolio.hu/gazdasag/20200812/megvan-joe-biden-alelnokjeloltje-444568",
      "urlToImage": "https://cdn.portfolio.hu/articles/images-xl/a/m/e/amerika-valasztas-demokrata-elovalasztas-usa-351693.jpg",
      "publishedAt": "2020-08-12T04:46:00Z",
      "content": "Az 55 éves szenátor, aki korábban ügyész volt Kaliforniában, az els színesbr ni alelnökjelölt az Egyesült Államok történetében.\r\n\"Végtelen megtiszteltetéssel jelentem be, hogy Kamala Harrist, a dolgo… [+1168 chars]"
    },
    {
      "source": {
        "id": "liberation",
        "name": "Libération"
      },
      "author": "Liberation.fr",
      "title": "Sénatrice noire et «jeune»: Kamala Harris, colistière parfaite de Joe Bidden",
      "description": "Les appels pour que le candidat démocrate choisisse une colistière noire se multipliaient depuis le mouvement de protestation contre le racisme et les violences policières provoqué par la mort de George Floyd. Fille d’immigrés jamaïcain et indienne, Kamala Ha…",
      "url": "https://www.liberation.fr/planete/2020/08/12/senatrice-noire-et-jeune-kamala-harris-colistiere-parfaite-de-joe-bidden_1796619?xtor=rss-450",
      "urlToImage": "https://medias.liberation.fr/photo/1276284-la-senatrice-kamala-harris-lors-d-un-debat-democrate-a-atlanta-le-20-novembre-2019.jpg?modified_at=1575441563&amp;picto=fb&amp;ratio_x=191&amp;ratio_y=100&amp;width=1080",
      "publishedAt": "2020-08-12T04:45:03Z",
      "content": "Ancienne rivale, et virulente critique au début des primaires: le candidat démocrate Joe Biden a annoncé mardi avoir choisi la sénatrice de Californie Kamala Harris comme colistière dans sa course à … [+7112 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vanguard"
      },
      "author": "Rasheed Sobowale",
      "title": "How Americans react to choice of black woman as VP hopeful",
      "description": "Democratic White House hopeful Joe Biden on Tuesday named Kamala Harris, a high-profile senator from California, as his vice presidential pick. Here is how US politicians and celebrities have reacted to her nomination: – Barack Obama – Former president Barack…",
      "url": "https://www.vanguardngr.com/2020/08/how-americans-react-to-choice-of-black-woman-as-vp-hopeful/",
      "urlToImage": null,
      "publishedAt": "2020-08-12T04:43:56Z",
      "content": "JOE BIDEN and KAMALA HARRIS. PHOTO: Brian Cahn/ZUMA Wire\r\nDemocratic White House hopeful Joe Biden on Tuesday named Kamala Harris, a high-profile senator from California, as his vice presidential pic… [+1812 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Svet.sme.sk"
      },
      "author": "TASR",
      "title": "Biden a Trump podľa očakávaní vyhrali primárky v Connecticute",
      "description": "Ani jeden z nich nemá reálneho súpera.",
      "url": "https://svet.sme.sk/c/22465744/biden-a-trump-podla-ocakavani-vyhrali-primarky-v-connecticute.html",
      "urlToImage": "https://m.smedata.sk/api-media/media/image/sme/3/63/6395693/6395693_1200x.jpeg?rev=2",
      "publishedAt": "2020-08-12T04:43:49Z",
      "content": "Ani jeden z nich nemá reálneho súpera.12. aug 2020 o 6:43 TASR WASHINGTON. Demokrat Joe Biden a republikán Donald Trump zvíazili v utorkových primárkach svojich strán v americkom táte Connecticut, in… [+1393 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Politiken.dk"
      },
      "author": null,
      "title": "Trump er overrasket over Bidens bud på vicepræsident",
      "description": "Ifølge den amerikanske præsident har Kamala Harris opført sig dårligt over for præsidentkandidat Joe Biden.",
      "url": "https://politiken.dk/udland/art7883693/Trump-er-overrasket-over-Bidens-bud-p%C3%A5-vicepr%C3%A6sident",
      "urlToImage": "https://politiken.dk/incoming/img7883756.3yh1nq/ALTERNATES/p16x9_960/FILE%20PHOTO%20Former%20Vice%20President%20Biden%20talks%20with%20Senator%20Harris%20after%20the%20conclusion%20of%20the%202020%20Democratic%20U.S",
      "publishedAt": "2020-08-12T04:39:20Z",
      "content": "Der er ikke oplæsning af denne artikel, så den oplæses derfor med maskinstemme. Kontakt os gerne på automatiskoplaesning@pol.dk, hvis du hører ord, hvis udtale kan forbedres. Du kan også hjælpe ved a… [+2580 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Natemat.pl"
      },
      "author": "Łukasz Grzegorczyk",
      "title": "To pierwsza taka nominacja w historii USA. Biden wskazał kandydatkę na wiceprezydenta",
      "description": "Joe Biden, kandydat Partii Demokratycznej na prezydenta USA wskazał senator Kamalę Harris jako swoją kandydatkę na wiceprezydenta. To historyczna nominacja, bowiem pierwsza czarnoskóra kobieta została wskazana przez jedną z czołowych amerykańskich partii w ry…",
      "url": "https://natemat.pl/317305,joe-biden-ma-kandydatke-na-wiceprezydenta-usa-kim-jest-kamala-harris",
      "urlToImage": "https://cdn.natemat.pl/7f204bc8f1a4a1f05151a972b3566b29,1200,0,0,0.jpg",
      "publishedAt": "2020-08-12T04:38:22Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Alexandra Del Rosario",
      "title": "Late Night Hosts React To Kamala Harris’ Historic Vice Presidential Bid",
      "description": "Hours after Joe Biden announced that California senator Kamala Harris would be his running mate for the 2020 presidential election, late night hosts finally shared their opinions on the news. The Late Show host Stephen Colbert and The Daily Show‘s Trevor Noah…",
      "url": "https://deadline.com/2020/08/late-night-hosts-react-kamala-harris-vice-president-1203010984/",
      "urlToImage": "https://pmcdeadline2.files.wordpress.com/2020/03/stephen-colbert-jimmy-fallon-trevor-noah-.jpg?w=1000",
      "publishedAt": "2020-08-12T04:37:40Z",
      "content": "Hours after Joe Biden announced that California senator Kamala Harris would be his running mate for the 2020 presidential election, late night hosts finally shared their opinions on the news.\r\nThe La… [+2479 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": null,
      "title": "Kamala Harris - Die Frau an Joe Bidens Seite",
      "description": "Kamala Harris tritt im November als Vizepräsidentschaftskandidatin von Joe Biden gegen Donald Trump an. Sie ist die Tochter eines Jamaikaners und einer Inderin und zur Zeit Senatorin des Bundesstaats Kalifornien.",
      "url": "https://www.welt.de/videos/video213357078/Vizepraesidentschaft-Kamala-Harris-Die-Frau-an-Joe-Bidens-Seite.html",
      "urlToImage": "https://www.welt.de/img/videos/mobile213357106/4021355357-ci16x9-w1200/Biden-zieht-mit-Harris-als-Vize-Kandidatin-in-Wahl.jpg",
      "publishedAt": "2020-08-12T04:37:37Z",
      "content": "Die WELT als ePaper: Die vollständige Ausgabe steht Ihnen bereits am Vorabend zur Verfügung so sind Sie immer hochaktuell informiert. Weitere Informationen: http://epaper.welt.de \r\n Der Kurz-Link die… [+49 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Freerepublic.com"
      },
      "author": "Benny Johnson",
      "title": "Biden Reads From Script And Holds Phone Upside Down In Call With Kamala",
      "description": "3 VERY IMPORTANT THINGS about this photo of Joe Biden calling Kamala to offer her VP spot: 1. Biden has to read from a script that is clearly visible 2. Biden does not know how to hold an iPhone (its upside down) 3. The cartoon on Bidens desk is a man screa…",
      "url": "https://www.freerepublic.com/focus/f-news/3873574/posts",
      "urlToImage": null,
      "publishedAt": "2020-08-12T04:36:51Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Le Soir"
      },
      "author": "Par Le Soir",
      "title": "Trump critique la désignation de Kamala Harris: «Elle a eu de très mauvais résultats aux primaires»",
      "description": "«J’étais plus surpris qu’autre chose parce qu’elle a été très médiocre» pendant la campagne des primaires démocrates, remportée par Joe Biden, a déclaré le président des Etats-Unis .",
      "url": "https://www.lesoir.be/318529/article/2020-08-12/trump-critique-la-designation-de-kamala-harris-elle-eu-de-tres-mauvais-resultats",
      "urlToImage": "https://www.lesoir.be/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/12/node_318529/27667151/public/2020/08/12/B9724261898Z.1_20200812063637_000+G72GFNPRK.2-0.jpg?itok=uGWg1vPB1597207844",
      "publishedAt": "2020-08-12T04:36:37Z",
      "content": "Le président américain Donald Trump sest dit mardi «surpris» par la décision du candidat démocrate à la Maison Blanche de choisir comme colistière la sénatrice noire Kamala Harris, dont il a jugé les… [+1072 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Le HuffPost"
      },
      "author": "Le HuffPost avec AFP",
      "title": "Kamala Harris, une colistière \"très médiocre\" pour Joe Biden, juge Donald Trump",
      "description": "ÉTATS-UNIS - Les attaques ont fusé d’emblée. Le président américain Donald Trump s’est dit ce mardi 11 août “surpris” par la décision du candidat démocrate à la Maison Blanche de choisir comme colistière la sénatrice noire Kamala Harris, dont il a jugé les pe…",
      "url": "https://www.huffingtonpost.fr/entry/donald-trump-kamala-harris-tres-mediocre_fr_5f336b41c5b64cc99fdfb80c",
      "urlToImage": "https://img.huffingtonpost.com/asset/5f336ff3220000eaa03887e7.jpeg?cache=CqGN6kCR56&ops=1200_630",
      "publishedAt": "2020-08-12T04:36:04Z",
      "content": "ÉTATS-UNIS - Les attaques ont fusé d’emblée. Le président américain Donald Trump s’est dit ce mardi 11 août “surpris” par la décision du candidat démocrate à la Maison Blanche de choisir comme colist… [+2113 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "RealClearPolitics"
      },
      "author": null,
      "title": "Trump: Kamala Harris Made \"Terrible Statements\" About Biden, \"Essentially Called Him A Racist\"",
      "description": "President Donald Trump joins Sean Hannity for an interview and discussed the media treatment of ongoing unrest in major cities, Joe Biden's decision to choose Sen. Kamala Harris as his running mate, and the upcoming election.\r\n\r\n\r\n\r\nSEAN HANNITY, FOX NEWS HOS…",
      "url": "https://www.realclearpolitics.com/video/2020/08/11/trump_kamala_harris_made_terrible_statements_about_biden_essentially_called_him_a_racist.html",
      "urlToImage": "https://assets.realclear.com/images/45/458716.jpg",
      "publishedAt": "2020-08-12T04:35:14Z",
      "content": "SEAN HANNITY, FOX NEWS HOST:  Joining us now live -- he's in the White House as we speak -- is the President of the United States.Mr. President, thank you, sir, for joining us. Appreciate you being h… [+4175 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "L'Express"
      },
      "author": "LEXPRESS.fr avec AFP",
      "title": "États-Unis : Joe Biden choisit la sénatrice Kamala Harris, première colistière noire",
      "description": "À 55 ans, la sénatrice de Californie est aussi la première personne d'origine indienne à briguer la vice-présidence. Elle pourrait être la dauphine désignée pour 2024.",
      "url": "https://www.lexpress.fr/actualite/monde/amerique-nord/etats-unis-joe-biden-choisit-la-senatrice-kamala-harris-premiere-colistiere-noire_2132738.html",
      "urlToImage": "https://static.lexpress.fr/medias_12248/w_1811,h_1359,c_crop,x_109,y_3/w_605,h_350,c_fill,g_north/v1597205395/kamala-harris-joe-biden_6271368.jpg",
      "publishedAt": "2020-08-12T04:34:27Z",
      "content": "Un choix historique. Le candidat démocrate à la Maison Blanche Joe Biden a choisi la sénatrice Kamala Harris pour défier avec lui Donald Trump le 3 novembre, première femme noire colistière aux États… [+5009 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "‘Donny from Queens’: Trump’s call into a sports radio show reveals the politics behind his push to restart college football - The Washington P",
      "description": "‘Donny from Queens’: Trump’s call into a sports radio show reveals the politics behind his push to restart college footballThe Washington Post Trump unloads in morning interviews as U.S. struggles to tame virusPOLITICO U.S. governors cringe at cost of Trump's…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=134712371",
      "urlToImage": null,
      "publishedAt": "2020-08-12T04:33:29Z",
      "content": "If you push the \"extra ice\" button on the soft drink vending machine, you won't\r\nget any ice. If you push the \"no ice\" button, you'll get ice, but no cup."
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "China increases military drills as tensions with US heat up - CNN",
      "description": "China increases military drills as tensions with US heat upCNN US Secretary of Health and Human Services on learnings from TaiwanABC News Azar defends Taiwan trip, says China should worry about 'getting more transparent, more open' on coronavirusFox News Trum…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=134712361",
      "urlToImage": null,
      "publishedAt": "2020-08-12T04:33:19Z",
      "content": "If you push the \"extra ice\" button on the soft drink vending machine, you won't\r\nget any ice. If you push the \"no ice\" button, you'll get ice, but no cup."
    }
  ]
}
```
