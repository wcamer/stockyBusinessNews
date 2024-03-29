/*
Needed components for stock info

daily open/close

previous close

Ticker details v3: the response will be na object 
/v3/reference/tickers/{ticker}
    ticker
    name
    locale
    currency_name
    description
    branding: {
        "logo_url"
        "lcon_url"
    }
    website?
example response 
{
    "request_id": "05ae9fa0c8dea527e47d82a41ac97b85",
    "results": {
        "ticker": "PRG",
        "name": "PROG Holdings, Inc.",
        "market": "stocks",
        "locale": "us",
        "primary_exchange": "XNYS",
        "type": "CS",
        "active": true,
        "currency_name": "usd",
        "cik": "0001808834",
        "composite_figi": "BBG00VSH86G4",
        "share_class_figi": "BBG00VSH86H3",
        "market_cap": 1504639241.28,
        "phone_number": "(385) 351-1369",
        "address": {
            "address1": "256 W. DATA DRIVE",
            "city": "DRAPER",
            "state": "UT",
            "postal_code": "84020"
        },
        "description": "PROG Holdings Inc is a financial technology holding company that provides transparent and competitive payment options to consumers. The Company has two reportable segments: (i) Progressive Leasing, an in-store, app-based, and e-commerce point-of-sale lease-to-own solutions provider; and (ii) Vive Financial (Vive), an omnichannel provider of second-look revolving credit products. The majority of the revenue of the company is earned through the progressive leasing segment.",
        "sic_code": "7359",
        "sic_description": "SERVICES-EQUIPMENT RENTAL & LEASING, NEC",
        "ticker_root": "PRG",
        "homepage_url": "https://www.progholdings.com",
        "total_employees": 1606,
        "list_date": "1984-09-07",
        "branding": {
            "logo_url": "https://api.polygon.io/v1/reference/company-branding/cHJvZ2hvbGRpbmdzLmNvbQ/images/2024-03-01_logo.png"
        },
        "share_class_shares_outstanding": 43690000,
        "weighted_shares_outstanding": 43688712,
        "round_lot": 100
    },
    "status": "OK"
}







Ticker news

Results example
{
    "results": [
        {
            "id": "-SoRgJ8O-OfF4a3_wJJjNeyv6T4XbCcK1B2adckGguo",
            "publisher": {
                "name": "The Motley Fool",
                "homepage_url": "https://www.fool.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico"
            },
            "title": "3 Beaten-Up Stocks",
            "author": "newsfeedback@fool.com (Motley Fool Staff)",
            "published_utc": "2024-03-14T17:11:45Z",
            "article_url": "https://www.fool.com/investing/2024/03/14/3-beaten-up-stocks/",
            "tickers": [
                "NYCB",
                "SFIX",
                "PRG"
            ],
            "image_url": "https://g.foolcdn.com/editorial/images/768514/mfm_05.jpg",
            "description": "We've also got some tips for travelers.",
            "keywords": [
                "investing"
            ]
        },
        {
            "id": "McwRegYutg3RBWXHjzujqv2f1MGwQtvYMTh-54oRMto",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/zacks.png",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/zacks.ico"
            },
            "title": "Infosys (INFY) to Implement AI Solutions for PROG Holdings",
            "author": "Zacks Equity Research",
            "published_utc": "2024-03-04T14:52:00Z",
            "article_url": "https://www.zacks.com/stock/news/2235370/infosys-infy-to-implement-ai-solutions-for-prog-holdings",
            "tickers": [
                "INFY",
                "DELL",
                "BL",
                "PRG"
            ],
            "amp_url": "https://www.zacks.com/amp/stock/news/2235370/infosys-infy-to-implement-ai-solutions-for-prog-holdings",
            "image_url": "https://staticx-tuner.zacks.com/images/articles/main/d3/848.jpg",
            "description": "Infosys (INFY) and PROG Holdings collaborate to improve the latter's operations by implementing solutions based on cloud and artificial intelligence."
        },
        {
            "id": "Z52Z7Clcjny9jmyt6lVKnxxoVYcO19MDUn4wDB3GcPk",
            "publisher": {
                "name": "Seeking Alpha",
                "homepage_url": "https://seekingalpha.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/seekingalpha.svg",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/seekingalpha.ico"
            },
            "title": "Berkshire's Q4 Earnings: Why I Nearly Doubled My Stake",
            "author": "A.J. Button",
            "published_utc": "2024-03-02T06:31:11Z",
            "article_url": "https://seekingalpha.com/article/4675435-berkshire-q4-earnings-nearly-doubled-my-stake",
            "tickers": [
                "AAPL",
                "BRK.A",
                "PRG",
                "BRK.B"
            ],
            "image_url": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/184769358/image_184769358.jpg?io=getty-c-w1536",
            "description": "Berkshire put out its latest stock holdings (13F), a new letter to shareholders, and an earnings release, all within two weeks. Learn why BRK.B stock is a strong value today because."
        },
        {
            "id": "gk60IPlsVrGu5SQGV1Im_Gg-ok_MUh1UfyeE6zvPNtw",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/zacks.png",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/zacks.ico"
            },
            "title": "These 2 Finance Stocks Could Beat Earnings: Why They Should Be on Your Radar",
            "author": "Zacks Equity Research",
            "published_utc": "2024-02-15T13:50:06Z",
            "article_url": "https://www.zacks.com/stock/news/2226696/these-2-finance-stocks-could-beat-earnings-why-they-should-be-on-your-radar",
            "tickers": [
                "PRG",
                "SLG"
            ],
            "amp_url": "https://www.zacks.com/amp/stock/news/2226696/these-2-finance-stocks-could-beat-earnings-why-they-should-be-on-your-radar",
            "image_url": "https://staticx-tuner.zacks.com/images/default_article_images/default20.jpg",
            "description": "Investors looking for ways to find stocks that are set to beat quarterly earnings estimates should check out the Zacks Earnings ESP."
        },
        {
            "id": "4KNRMk8u7WYitCnE9vb4im0arUiiR5IyhoR1ZrB5lNk",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "http



*/

console.log("Hello from the stocksdeals.js")