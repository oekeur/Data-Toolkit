/* use this to test out your function */
window.onload = function() {
  D3Map()
}

function D3Map () {
    // Getting the container's dimensions
  var width = document.getElementById('container').offsetWidth;
  var height = document.getElementById('container').offsetHeight;
  var data = {}
  // Datamap constructor, fill in the options from the docs
   dataset =                      //Place data here
    [["AND","ca"],["ARE","ar-AE,fa,en,hi,ur"],["AFG","fa-AF,ps,uz-AF,tk"],["ATG","en-AG"],["AIA","en-AI"],["ALB","sq,el"],["ARM","hy"],["AGO","pt-AO"],["ATA",""],["ARG","es-AR,en,it,de,fr,gn"],["ASM","en-AS,sm,to"],["AUT","de-AT,hr,hu,sl"],["AUS","en-AU"],["ABW","nl-AW,es,en"],["ALA","sv-AX"],["AZE","az,ru,hy"],["BIH","bs,hr-BA,sr-BA"],["BRB","en-BB"],["BGD","bn-BD,en"],["BEL","nl-BE,fr-BE,de-BE"],["BFA","fr-BF"],["BGR","bg,tr-BG,rom"],["BHR","ar-BH,en,fa,ur"],["BDI","fr-BI,rn"],["BEN","fr-BJ"],["BLM","fr"],["BMU","en-BM,pt"],["BRN","ms-BN,en-BN"],["BOL","es-BO,qu,ay"],["BES","nl,pap,en"],["BRA","pt-BR,es,en,fr"],["BHS","en-BS"],["BTN","dz"],["BVT",""],["BWA","en-BW,tn-BW"],["BLR","be,ru"],["BLZ","en-BZ,es"],["CAN","en-CA,fr-CA,iu"],["CCK","ms-CC,en"],["COD","fr-CD,ln,kg"],["CAF","fr-CF,sg,ln,kg"],["COG","fr-CG,kg,ln-CG"],["CHE","de-CH,fr-CH,it-CH,rm"],["CIV","fr-CI"],["COK","en-CK,mi"],["CHL","es-CL"],["CMR","en-CM,fr-CM"],["CHN","zh-CN,yue,wuu,dta,ug,za"],["COL","es-CO"],["CRI","es-CR,en"],["CUB","es-CU"],["CPV","pt-CV"],["CUW","nl,pap"],["CXR","en,zh,ms-CC"],["CYP","el-CY,tr-CY,en"],["CZE","cs,sk"],["DEU","de"],["DJI","fr-DJ,ar,so-DJ,aa"],["DNK","da-DK,en,fo,de-DK"],["DMA","en-DM"],["DOM","es-DO"],["DZA","ar-DZ"],["ECU","es-EC"],["EST","et,ru"],["EGY","ar-EG,en,fr"],["ESH","ar,mey"],["ERI","aa-ER,ar,tig,kun,ti-ER"],["ESP","es-ES,ca,gl,eu,oc"],["ETH","am,en-ET,om-ET,ti-ET,so-ET,sid"],["FIN","fi-FI,sv-FI,smn"],["FJI","en-FJ,fj"],["FLK","en-FK"],["FSM","en-FM,chk,pon,yap,kos,uli,woe,nkr,kpg"],["FRO","fo,da-FO"],["FRA","fr-FR,frp,br,co,ca,eu,oc"],["GAB","fr-GA"],["GBR","en-GB,cy-GB,gd"],["GRD","en-GD"],["GEO","ka,ru,hy,az"],["GUF","fr-GF"],["GGY","en,fr"],["GHA","en-GH,ak,ee,tw"],["GIB","en-GI,es,it,pt"],["GRL","kl,da-GL,en"],["GMB","en-GM,mnk,wof,wo,ff"],["GIN","fr-GN"],["GLP","fr-GP"],["GNQ","es-GQ,fr"],["GRC","el-GR,en,fr"],["SGS","en"],["GTM","es-GT"],["GUM","en-GU,ch-GU"],["GNB","pt-GW,pov"],["GUY","en-GY"],["HKG","zh-HK,yue,zh,en"],["HMD",""],["HND","es-HN"],["HRV","hr-HR,sr"],["HTI","ht,fr-HT"],["HUN","hu-HU"],["IDN","id,en,nl,jv"],["IRL","en-IE,ga-IE"],["ISR","he,ar-IL,en-IL,"],["IMN","en,gv"],["IND","en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc"],["IOT","en-IO"],["IRQ","ar-IQ,ku,hy"],["IRN","fa-IR,ku"],["ISL","is,en,de,da,sv,no"],["ITA","it-IT,de-IT,fr-IT,sc,ca,co,sl"],["JEY","en,pt"],["JAM","en-JM"],["JOR","ar-JO,en"],["JPN","ja"],["KEN","en-KE,sw-KE"],["KGZ","ky,uz,ru"],["KHM","km,fr,en"],["KIR","en-KI,gil"],["COM","ar,fr-KM"],["KNA","en-KN"],["PRK","ko-KP"],["KOR","ko-KR,en"],["KWT","ar-KW,en"],["CYM","en-KY"],["KAZ","kk,ru"],["LAO","lo,fr,en"],["LBN","ar-LB,fr-LB,en,hy"],["LCA","en-LC"],["LIE","de-LI"],["LKA","si,ta,en"],["LBR","en-LR"],["LSO","en-LS,st,zu,xh"],["LTU","lt,ru,pl"],["LUX","lb,de-LU,fr-LU"],["LVA","lv,ru,lt"],["LBY","ar-LY,it,en"],["MAR","ar-MA,fr"],["MCO","fr-MC,en,it"],["MDA","ro,ru,gag,tr"],["MNE","sr,hu,bs,sq,hr,rom"],["MAF","fr"],["MDG","fr-MG,mg"],["MHL","mh,en-MH"],["MKD","mk,sq,tr,rmm,sr"],["MLI","fr-ML,bm"],["MMR","my"],["MNG","mn,ru"],["MAC","zh,zh-MO,pt"],["MNP","fil,tl,zh,ch-MP,en-MP"],["MTQ","fr-MQ"],["MRT","ar-MR,fuc,snk,fr,mey,wo"],["MSR","en-MS"],["MLT","mt,en-MT"],["MUS","en-MU,bho,fr"],["MDV","dv,en"],["MWI","ny,yao,tum,swk"],["MEX","es-MX"],["MYS","ms-MY,en,zh,ta,te,ml,pa,th"],["MOZ","pt-MZ,vmw"],["NAM","en-NA,af,de,hz,naq"],["NCL","fr-NC"],["NER","fr-NE,ha,kr,dje"],["NFK","en-NF"],["NGA","en-NG,ha,yo,ig,ff"],["NIC","es-NI,en"],["NLD","nl-NL,fy-NL"],["NOR","no,nb,nn,se,fi"],["NPL","ne,en"],["NRU","na,en-NR"],["NIU","niu,en-NU"],["NZL","en-NZ,mi"],["OMN","ar-OM,en,bal,ur"],["PAN","es-PA,en"],["PER","es-PE,qu,ay"],["PYF","fr-PF,ty"],["PNG","en-PG,ho,meu,tpi"],["PHL","tl,en-PH,fil"],["PAK","ur-PK,en-PK,pa,sd,ps,brh"],["POL","pl"],["SPM","fr-PM"],["PCN","en-PN"],["PRI","en-PR,es-PR"],["PSE","ar-PS"],["PRT","pt-PT,mwl"],["PLW","pau,sov,en-PW,tox,ja,fil,zh"],["PRY","es-PY,gn"],["QAT","ar-QA,es"],["REU","fr-RE"],["ROU","ro,hu,rom"],["SRB","sr,hu,bs,rom"],["RUS","ru,tt,xal,cau,ady,kv,ce,tyv,cv,udm,tut,mns,bua,myv,mdf,chm,ba,inh,tut,kbd,krc,ava,sah,nog"],["RWA","rw,en-RW,fr-RW,sw"],["SAU","ar-SA"],["SLB","en-SB,tpi"],["SYC","en-SC,fr-SC"],["SDN","ar-SD,en,fia"],["SWE","sv-SE,se,sma,fi-SE"],["SGP","cmn,en-SG,ms-SG,ta-SG,zh-SG"],["SHN","en-SH"],["SVN","sl,sh"],["SJM","no,ru"],["SVK","sk,hu"],["SLE","en-SL,men,tem"],["SMR","it-SM"],["SEN","fr-SN,wo,fuc,mnk"],["SOM","so-SO,ar-SO,it,en-SO"],["SUR","nl-SR,en,srn,hns,jv"],["SSD","en"],["STP","pt-ST"],["SLV","es-SV"],["SXM","nl,en"],["SYR","ar-SY,ku,hy,arc,fr,en"],["SWZ","en-SZ,ss-SZ"],["TCA","en-TC"],["TCD","fr-TD,ar-TD,sre"],["ATF","fr"],["TGO","fr-TG,ee,hna,kbp,dag,ha"],["THA","th,en"],["TJK","tg,ru"],["TKL","tkl,en-TK"],["TLS","tet,pt-TL,id,en"],["TKM","tk,ru,uz"],["TUN","ar-TN,fr"],["TON","to,en-TO"],["TUR","tr-TR,ku,diq,az,av"],["TTO","en-TT,hns,fr,es,zh"],["TUV","tvl,en,sm,gil"],["TWN","zh-TW,zh,nan,hak"],["TZA","sw-TZ,en,ar"],["UKR","uk,ru-UA,rom,pl,hu"],["UGA","en-UG,lg,sw,ar"],["UMI","en-UM"],["USA","en-US,es-US,haw,fr"],["URY","es-UY"],["UZB","uz,ru,tg"],["VAT","la,it,fr"],["VCT","en-VC,fr"],["VEN","es-VE"],["VGB","en-VG"],["VIR","en-VI"],["VNM","vi,en,fr,zh,km"],["VUT","bi,en-VU,fr-VU"],["WLF","wls,fud,fr-WF"],["WSM","sm,en-WS"],["XKX","sq,sr"],["YEM","ar-YE"],["MYT","fr-YT"],["ZAF","zu,xh,af,nso,en-ZA,tn,st,ts,ss,ve,nr"],["ZMB","en-ZM,bem,loz,lun,lue,ny,toi"],["ZWE","en-ZW,sn,nr,nd"]]
  
  var onlyValues = dataset.map(function(obj){ return obj[1].split(",").length; });
    var minValue = Math.min.apply(null, onlyValues),
            maxValue = 12;

  var paletteScale = d3.scale.linear()
            .domain([minValue,maxValue])
            .range(["#FFFFFF","#000000"]);

  // fill dataset in appropriate format
    dataset.forEach(function(item){ //
        // item example value ["USA", 70]
        var iso = item[0],
            lang = item[1],
            value = item[1].split(",").length; 
        // console.log(dataset) 
        data[iso] = { languages: lang, fillColor: paletteScale(value) };
        // console.log(data)
    });

  var map = new Datamap({
    element: document.getElementById('container'),
    data : data,
  geographyConfig: {
      borderColor: "#000000",
    popupTemplate: function(geo, data) {
      // Don't show if no data present
      if (!data) { return ; }
      // else return the data
        return ['<div class="hoverinfo"><strong>',
                'Languages in ' + geo.properties.name,
                ': ' + data.languages.split(",").length, '<br>', data.languages.split(","),
                '</strong></div>'].join('');
        }
        // highlightFillColor: 'data.fillColor';
        // highlightBorderColor: 'rgba(250, 15, 160, 0.2)';
        // highlightBorderWidth: 5;
      },
  done: function(datamap) {
     datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));

     function redraw() {
       datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
     }
  }
  });
}
