let textArea = document.getElementById('text-area');
//JSONdata poniżej musi byc uzupełniony wczytanym JSONem z pliku. Zostawiam do testowania.
let JSONdata = [
    [
      "All Open SR",
      44153.6682060185,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      "All TATs are in calendar days",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      "Customer Site",
      "Project Name",
      "Fix Needed On",
      "SR",
      "Targeted Release",
      "# Sub",
      "CRIT?",
      "Is Reg",
      "Is Reproducible?",
      "Customer Computed Channel",
      "Brand",
      "Portfolio",
      "Domain",
      "Product",
      "Apps",
      "Level",
      "Feature Group",
      "Abstract",
      "Status",
      "TAT Pos",
      "Cumul TAT / Current Status",
      "DS Management cumulative TAT",
      "Global Request Life TAT",
      "First Open Date",
      "First Open Date Quarter",
      "Submitter Platform",
      "Submitter Geography",
      "Submitter Country",
      "Customer Geography",
      "FE Responsible",
      "Call Center",
      "BE Responsible",
      "Back-End Team",
      "IR Master SR Brand Org Owner",
      "IR Master SR owner Domain Group",
      "IR Master SR owner Domain",
      "IR Master SR Owner ID",
      "IR Master SR with link",
      "IR Brand Org Corrector",
      "IR Master SR Domain corrector",
      "IR Master SR Corrector",
      "IR Sev.",
      "IR Master SR Status",
      "IR Master SR TD",
      "IR Master SR Closure Type",
      "IR Master SR CDD- DEPRECATED",
      "IR Master SR CDD State- DEPRECATED",
      "IR CDD Last Modif Date and Actor",
      "SR Closure Type",
      "BR Targeted Rel",
      "BR",
      "BR Closure type",
      "First Open Date Month",
      "WFI TAT",
      "R&D Support Certif TAT",
      "R&D TAT",
      "R&D Support Validation TAT",
      "customer Validation TAT",
      "Customer Company Industry"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00571638",
      "ByMe 1.0",
      1,
      null,
      null,
      "X",
      "BT",
      "3DVIA",
      "ByMe",
      "ByMe",
      null,
      null,
      "ByMe 1.0 Golden",
      "kitchen planning",
      "INC000012705830-Positioning tool shows wrong distances.",
      "R&D Dispatch",
      226.087268518519,
      530.093541666667,
      530.180092592593,
      530.19630787037,
      43623.4434722222,
      "2019-Q2",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "RYNKIEWICZ,Jeremi",
      "Europe: Poland - 3DVIA",
      "RYNKIEWICZ,Jeremi",
      "Europe: Poland - 3DVIA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "ByMe 1.0",
      "BR10000268751",
      null,
      "2019-06",
      0,
      0.0865509259259259,
      530.093541666667,
      0,
      0,
      "Home & Lifestyle"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00706500",
      "ByMe 2.0",
      1,
      null,
      null,
      "X",
      "BT",
      "3DVIA",
      "ByMe",
      "ByMe",
      "ByMe Platform - 1 Kitchen Application Instance",
      null,
      "ByMe 2.0 Golden",
      "kitchen planning",
      "INC000016774009   nKP: worktops minimal distance warning (NL market)",
      "Customer Clarification",
      9.84109953703704,
      14.2862152777778,
      1.86443287037037,
      16.1544328703704,
      44137.4729166667,
      "2020-Q4",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "RYNKIEWICZ,Jeremi",
      "Europe: Poland - 3DVIA",
      "RYNKIEWICZ,Jeremi",
      "Europe: Poland - 3DVIA",
      "Support",
      "Support_APRISO",
      "Support_APRISO",
      "JRZ2",
      "IR-810513-ByMePlatform2",
      "3DVIA",
      "3DVIA",
      "T3F",
      "1",
      "Need Clarification",
      null,
      null,
      null,
      null,
      null,
      null,
      "ByMe 2.0",
      "BR10000300800",
      null,
      "2020-11",
      14.2862152777778,
      1.86266203703703,
      0.00177083333333333,
      0,
      0,
      "Home & Lifestyle"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00706847",
      "ByMe 2.0",
      1,
      null,
      null,
      "X",
      "BT",
      "3DVIA",
      "ByMe",
      "ByMe",
      null,
      null,
      "ByMe 2.0 Golden",
      "kitchen planning",
      "INC000016780225- nKP- Not allowing drawers",
      "R&D Dispatch",
      0.271030092592593,
      1.44166666666667,
      2.33710648148148,
      15.0747800925926,
      44138.5642939815,
      "2020-Q4",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "ZIEBA,Bartlomiej",
      "Europe: Poland - 3DVIA",
      "ZIEBA,Bartlomiej",
      "Europe: Poland - 3DVIA",
      "3DVIA",
      "3DVIA",
      "3DVIA",
      "SZG7",
      "IR-812513-ByMePlatform2",
      "3DVIA",
      "3DVIA",
      "SZG7",
      "2",
      "Opened",
      null,
      null,
      null,
      null,
      null,
      "Methodology",
      "ByMe 2.0",
      "BR10000301204",
      null,
      "2020-11",
      2.78611111111111,
      0.894097222222222,
      1.44166666666667,
      0.00134259259259259,
      9.93605324074074,
      "Home & Lifestyle"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00707996",
      null,
      1,
      null,
      null,
      null,
      "BT",
      "3DVIA",
      "ByMe",
      null,
      null,
      null,
      "ByMe 2.0 Golden",
      null,
      "INC000016768354 - nKP: tradfri transformer or remote or the fornima power missing in isell",
      "Customer Validation",
      8.95334490740741,
      11.810162037037,
      0.0720717592592593,
      11.9174421296296,
      44141.7413310185,
      "2020-Q4",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "WRONA,Konstanty",
      "Europe: Poland - 3DVIA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "Methodology",
      null,
      null,
      null,
      "2020-11",
      0,
      0.0689004629629629,
      0,
      0.0031712962962963,
      11.810162037037,
      "Home & Lifestyle"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00708604",
      null,
      1,
      null,
      null,
      null,
      "BT",
      "3DVIA",
      "ByMe",
      null,
      null,
      null,
      "ByMe 2.0 Golden",
      null,
      "INC000016850077 - nKP: wall cabinet gets into collision",
      "Customer Validation",
      8.19472222222222,
      8.19459490740741,
      0.0370601851851852,
      8.23335648148148,
      44145.3919097222,
      "2020-Q4",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "ZIEBA,Bartlomiej",
      "Europe: Poland - 3DVIA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "Methodology",
      null,
      null,
      null,
      "2020-11",
      0,
      0.0370601851851852,
      0,
      0,
      8.19459490740741,
      "Home & Lifestyle"
    ],
    [
      "INTER IKEA SYSTEMS B.V.",
      null,
      null,
      "SR00709743",
      null,
      1,
      null,
      null,
      null,
      "BT",
      "3DVIA",
      "ByMe",
      null,
      null,
      null,
      "ByMe 2.0 Golden",
      null,
      "INC000016869336 nKP - Incorrect Edge Calculation in the itemlist",
      "Customer Validation",
      5.16864583333333,
      5.16851851851852,
      0.0443981481481481,
      5.22792824074074,
      44148.4106481481,
      "2020-Q4",
      "EMEAR",
      "EURONORTH",
      "The Netherlands",
      "EURONORTH",
      "ZIEBA,Bartlomiej",
      "Europe: Poland - 3DVIA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "Methodology",
      null,
      null,
      null,
      "2020-11",
      0,
      0.0443981481481482,
      0,
      0,
      5.16851851851852,
      "Home & Lifestyle"
    ],
    [
      "KINGFISHER INFORMATION TECHNOLOGY SERVICES FRANCE",
      null,
      null,
      "SR00699786",
      "ByMe 2.0",
      1,
      null,
      null,
      null,
      "VS",
      "3DVIA",
      "3DVIA Home",
      "ByMe",
      "3DVIA Home for professionals - Professional user",
      null,
      "3DVIA Home 5.0 Golden",
      "kitchen planning",
      "Castorama HomeByMe/ Specefic project # Unable to print 2D Plans",
      "Customer Clarification",
      7.2406712962963,
      21.054837962963,
      21.0464351851852,
      42.1096296296296,
      44111.5222916667,
      "2020-Q4",
      "EMEAR",
      "EUROWEST",
      "France",
      "EUROWEST",
      "WOJTACHNIO,Tomasz",
      "Europe: Poland - 3DVIA",
      "WOJTACHNIO,Tomasz",
      "Europe: Poland - 3DVIA",
      "3DVIA",
      "3DVIA",
      "3DVIA",
      "TWO1",
      "IR-802627-ByMePlatform2",
      "3DVIA",
      "3DVIA",
      "HBI4",
      "2",
      "Need Clarification",
      null,
      null,
      null,
      null,
      null,
      null,
      "ByMe 2.0",
      "BR10000298962",
      null,
      "2020-10",
      21.054837962963,
      12.0278240740741,
      9.01861111111111,
      0,
      0,
      "Home & Lifestyle"
    ]
  ];
let len = JSONdata.length;
let len1 = JSONdata[0].length;
let backlog = [];
let jsonformat = [];


  function AssignTitles() { //przypisuje wartości do nazw kolumn i grupuje 
      let SR = []; 
      for (let j=3; j < len; j++) { //wartosci wystepuja dopiero od 3 elementu
          for (let i = 0; i < len1; i++){
              let card = [JSONdata[2][i], JSONdata[j][i]] //pierwszym elemenetem zawsze jest tytuł - drugi element, bo 0 i 1 są niepotrzebne
              SR.push(card); //wrzuca po kolei tytuł z wartością mu odpowiadającą do puli
              //console.log("i=",i,"j=", j, "card", card);
              }
          backlog.push(SR); //wrzuca pojedynczy kejs do arraya backlogu
          SR=[]; //oproznia array na nastepna iteracje
        }
      console.log("Backlog array of arrays",backlog);
      //textArea.innerText = "Backlog: " + backlog.length
      return backlog;
  }

  function ToJSON(){
      
      for(let a=0; a<backlog.length; a++){
        let arr = backlog[a];
        let obj = Object.fromEntries(arr);
        jsonformat.push(obj);
        }
      console.log("Sformatowany JSON - Array of Objects",jsonformat);
      //console.log(jsonformat[0]['Customer Site']);
 
  }
  
  AssignTitles();
  ToJSON();
 
  
  function tableFromJson() {
    
    let tableData = jsonformat; //sformatowany json do przeprocesowania w tabele
    let col = [];
    //wyciagniecie naglowkow tabeli
    for (let i = 0; i < tableData.length; i++) {
        for (let key in tableData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // Create a table.
    let table = document.createElement("table");

    // Create table header row using the extracted headers above.
    let tr = table.insertRow(-1);                   // table row.

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (let i = 0; i < tableData.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = tableData[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    let divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);}