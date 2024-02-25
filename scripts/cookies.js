window.addEventListener('load', function () {

    // obtain plugin
    var cc = initCookieConsent();
  
    // run plugin with your configuration
    cc.run({
        current_lang: 'en',
        autoclear_cookies: true,                   // default: false
        theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.7.1/dist/cookieconsent.css',  // 🚨 replace with a valid path
        page_scripts: true,                        // default: false
  
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0
  
        onFirstAction: function (user_preferences, cookie) {
            // callback triggered only once on the first accept/reject action
        },
  
        onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
            for (var i = 0; i < cookie.level.length; i++) {
                if (cookie.level[i] === "analytics") {
                    gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                    });
                }
  
                if (cookie.level[i] === "targeting") {
                    gtag('consent', 'update', {
                        'ad_storage': 'granted'
                    });
                }
            }
        },
  
        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
        },
  
        gui_options: {
            consent_modal: {
                layout: 'box',                      // box,cloud,bar
                position: 'bottom left',           // bottom,middle,top + left,right,center
                transition: 'slide'                 // zoom,slide
            },
  
        },
  
  
        languages: {
            'cs': {
                consent_modal: {
                    title: 'Používáme cookies!',
                    description: 'Aby web fungoval správně, využíváme nezbytná cookies. Jestli se o nich chcete dozvědět víc nebo si navolit dobrovolná cookies, <button type="button" data-cc="c-settings" class="cc-link">klikněte zde.</button> <br> Cookies používáme nejen k zabezpečení základních funkcí webu, ale taky abychom vám poskytli tu nejlepší uživatelskou zkušenost a oslovovali vás vhodnými reklamami. <button type="button" data-cc="c-settings" class="cc-link">Zde</button> si můžete zvolit jednotlivé kategorie a nastavit, jak máme s vašimi daty pracovat.',
                    primary_btn: {
                        text: 'Přijímám vše',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Odmítám vše',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'COOKIES NASTAVENÍ',
                    save_settings_btn: 'Uložit nastavení',
                    accept_all_btn: 'Přijímám vše',
                    reject_all_btn: 'Odmítám vše',
                    close_btn_label: 'Zavřít',
  
                    cookie_table_headers: [
                        {col1: 'Jméno'},
                        {col2: 'doména'},
                        {col3: 'Expirace'},
                        {col4: 'Popis'}
                    ],
                    blocks: [
                        {
                            title: 'Využití cookies',
                            description: 'Cookies používáme nejen k zabezpečení základních funkcí webu, ale taky abychom vám poskytli tu nejlepší uživatelskou zkušenost a oslovovali vás vhodnými reklamami. Zde si můžete zvolit jednotlivé kategorie a nastavit, jak máme s vašimi daty pracovat.',
                        }, {
                            title: 'Nezbytná základní cookies',
                            description: 'Tato cookies jsou nezbytná, neboť vám umožňují používat stránku. Tato kategorie nemůže být vypnuta.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Funkční a analytické cookies',
                            description: 'Tato cookies dovolují stránce zapamatovat si volby, které jste v minulosti udělali.',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [             // list of all expected cookies
                                {
                                    col1: '^_ga',       // match all cookies starting with "_ga"
                                    col2: 'google.com',
                                    col3: '1 rok',
                                    col4: 'Google analytics pro sledování návštěvnosti',
                                    is_regex: true
                                }
                            ]
                        }, {
                            title: 'Cookies pro cílení a reklamu',
                            description: 'Tato cookies sbírají informace o tom, jak využíváte tento web. Pamatují si, že jste ho navštívili a na které stránky jste klikli. Všechna data jsou anonymizována a není možné vás na jejich základě identifikovat.',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Více informací',
                            description: 'V případě jiných dotazů ohledně využívání cookies nás neváhejte nás <a class="cc-link" href="https://www.ritici.cz/#kontakt">kontaktovat</a>.',
                        }
                    ]
                }
            },
  
        }
    });
  
  });