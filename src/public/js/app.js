const cheerio = require("cheerio");
const fetch = require("node-fetch");
const mysql = require ('mysql')
 

 //-------------------------------------------------------------------------------------------
 async function main() {

    var e = new Date();
    
    segundos = (e.getSeconds());
    minutos = (e.getMinutes());
    horas = (e.getHours());

    dia = (e.getDate());
    mes = (e.getMonth()+1);
    ano = (e.getFullYear());


 //------------------------------------------------------------------------------------------------------   

   hora = (horas + ":" +  minutos + ":" + segundos);
  let fecha = (dia + "-" +  mes + "-" + ano);
  

 
  //------------------------------------------------------------------------------------------------ 
 
         let response5 = await fetch ('https://exchangemonitor.net/estadisticas/divisas/VES')
          html5 = await response5.text(); 

          let response6 = await fetch ('https://exchangemonitor.net/estadisticas/divisas/CLP')
          html6 = await response6.text();  
          
          let response7 = await fetch ('https://exchangemonitor.net/estadisticas/divisas/MXN')
          html7 = await response7.text();

          let response8 = await fetch ('https://exchangemonitor.net/estadisticas/divisas/EUR')
          html8 = await response8.text();

          let response9 = await fetch ('https://exchangemonitor.net/estadisticas/divisas/PEN')
          html9 = await response9.text();

          
          //---------------------------------------------------------------------------------------------------
       
           let $5 = cheerio.load(html5)
        const   price5 = $5 ('h2').text()

          let $6 = cheerio.load(html6)
        const   price6 = $6 ('h2').text()

        let $7 = cheerio.load(html7)
        const   price7 = $7 ('h2').text()
                 
        let $8 = cheerio.load(html8)
        const   price8 = $8 ('h2').text()

        let $9 = cheerio.load(html9)
        const   price9 = $9 ('h2').text()



    


          //-----------------------------------------------------------------------------------------------------

          //btc = (price4.replace('.','').replace(',','.').slice(0,7)*1);

          monitor = price5.slice(0,9).replace('.','').replace('.','') * 1;
           
           usdclp = price6.replace(',','.').slice(0,7) * 1  ;

           usdmxn = price7.replace(',','.').slice(0,6) * 1  ;

           usdeur = price8.replace(',','.').slice(0,4) * 1  ;

           usdpen = price9.replace(',','.').slice(0,4) * 1  ;
        
         
        
         

           



        //-----------------------------------------------------------------------------------------------------------------------------

      


        const tasaceroclp = ((monitor*0.95/usdclp).toFixed(2));
        let tasaclp5 = ((tasaceroclp * 0.95).toFixed(2));
        let tasaclp8 = ((tasaceroclp * 0.92).toFixed(2));
        let tasaclp10 = ((tasaceroclp * 0.90).toFixed(2));
         
         const tasaceromxn = ((monitor*0.95/usdmxn).toFixed(2));
         let tasamxn5 = ((tasaceromxn * 0.95).toFixed(2));
         let tasamxn8 = ((tasaceromxn * 0.92).toFixed(2));
         let tasamxn10 = ((tasaceromxn * 0.90).toFixed(2));

          const tasaceroeur = ((monitor*0.97/usdeur).toFixed(2));
          let tasaeur8 = ((tasaceroeur * 0.92).toFixed(2));
          let tasaeur10 = ((tasaceroeur * 0.90).toFixed(2));
          let tasaeur15 = ((tasaceroeur * 0.85).toFixed(2));

          const tasaceropen = ((monitor*0.98/usdpen).toFixed(2));
          let tasapen5 = ((tasaceropen * 0.95).toFixed(2));
          let tasapen8 = ((tasaceropen * 0.92).toFixed(2));
          let tasapen10 = ((tasaceropen * 0.90).toFixed(2));
          
          
          const formatter = new Intl.NumberFormat('es');
          
          var tasaceromxnformat = (formatter.format(tasaceromxn.slice(0,6))); 
          var tasamxnformat8 = (formatter.format( tasamxn8.slice(0,6))); 
          
          var tasaceroeurformat = (formatter.format(tasaceroeur.slice(0,8))); 
          var tasaeurformat10 = (formatter.format( tasaeur10.slice(0,8))); 
          
          var tasaceroclpformat = (formatter.format(tasaceroclp.slice(0,5))); 
          var tasaclpformat8 = (formatter.format( tasaclp8.slice(0,5))); 
          
            var tasaceropenformat = (formatter.format(tasaceropen.slice(0,7))); 
          var tasapenformat5 = (formatter.format( tasapen5.slice(0,7))); 
          
          
          
          




         //---------------------------------------------------------------------------------------------------------




          const conection = mysql.createConnection({
            host:'localhost',
          user:'flashpoi_euro',
          password:'Javieroca123-',
           database:'flashpoi_remesafintech'
            
            
            })
        
            conection.connect( (err) =>{
                if(err) throw err
                console.log('la conexion funciona')
            });
   
        
//-----------------------------------------------------------

//MEXICOOOO
// ESTO FUE LO QUE ARREGLO GOYO CON EL SIGNO DE INTERROGACION Y LAS LINEAS POSTERIORES
  
var insertar1 = "INSERT INTO  tablatasas (fecha,hora,tasaceromexico,tasaceroespana,tasacerochile,tasaceroperu) VALUES ?";
  var values1 =    [
    [fecha,hora,tasaceromxnformat,tasaceroeurformat,tasaceroclpformat,tasaceropenformat]
];

conection.query(insertar1, [values1], function (err, result) {
    if (err) throw err;

    
});
         




  
var insertar1 = "INSERT INTO  tablatasasclientes (fecha,hora,tasamxn8,tasaeur10,tasaclp8,tasapen5) VALUES ?";
  var values1 =    [
    [fecha,hora,tasamxnformat8,tasaeurformat10,tasaclpformat8,tasapenformat5]
];

conection.query(insertar1, [values1], function (err, result) {
    if (err) throw err;

    
});












    

    



    

     console.log("---------------------------------------------- ")
     console.log(" ")
    console.log(" ")
  
    // console.log(btc)
    console.log(tasaceromxnformat); 
    console.log(tasaceroclpformat); 
    console.log(tasaceroeurformat); 
    console.log(tasaceropenformat);

   //  console.log(formatter.format(monitor));
    //console.log(usdeur)
   //  console.log(usdpen)
     // console.log(tasamxnformat8 );
       console.log("")
        console.log(hora)
  
     
     
    /console.log("---------------------------------------------- ")


        
        

            
         

}

//main();
setInterval(() => main(), 5000);




