//aumenta e diminue o tamanho do selo na section
// $(".marca").mouseover(function(){
//     $(".marca").animate({
//         width: "23%"
//     });
// });

// $(".marca").mouseleave(function(){
//     $(".marca").animate({
//         width: "20%"
//     });
// });



// Definição dos textos que irão nas DIVs 
const areaSaude = {
    advogado: "Matheus Bueno",
    srcPhoto: "../image/Matheus.png",
    title: "DIREITO MÉDICO E DA SAÚDE",
    content: 
      `
      <p>
         O Direito Médico, Hospitalar e Saúde é um ramo recente dentro do mundo jurídico, ramo esse que visa a intensificação do entendimento da relação jurídica da saúde  para maior proteção dos pacientes e efetiva assessoria aos médicos e hospitais.
      </p>
      <p>
         O Direito Médico e da Saúde compreende uma gama de assuntos, desde a relação médico paciente até a análise de novas tecnologias da saúde.
      </p>
      <p>
         Esse ramo, portanto, se dedica ao estudo das regulamentações, desde leis, resoluções de conselhos até jurisprudências atuais, que envolvem as atividades dos profissionais e instituições de saúde.  
      </p>
      <p>
         O direito da saúde tem crescido muito no Brasil e no mundo, ainda tendo grandes perspectivas de avanços. As demandas judiciais e administrativas também crescem rapidamente em um ambiente de rápida dispersão de informações. 
      </p>
      <p>
         O Direito médico e da Saúde envolve o contencioso, tratando de erros médicos, erros de diagnósticos, ações envolvendo plano de saúde, medicamentos, entre outros, e também ao âmbito preventivo e consultivo, no tocante a  relação médico e paciente, prontuários, sistemas e informações, sigilo, responsabilidade civil, uso de novas tecnologias da saúde e muito mais. 
      </p>
      <p>
         Esse ramo está voltado tanto para Hospitais, Clínicas (médicos ou dentista), Consultórios, Planos de Saúde, quanto para pacientes ou usuários de serviços prestados pelo Estado. 
      </p>
      <p>
         As nossas áreas de atuação consultiva e/ou contenciosa envolvem:
         <ul>
            <li>Atuação em favor de médicos, dentistas, clínicas, hospitais e pacientes; </li>
            <li>Atuação na área regulatória;</li>
            <li>Defesas administrativas contra autos de infração lavrados pelos Conselhos Regionais ou Federal de Medicina ou Odontologia, mandados e decisões das autoridades de saúde;</li>
            <li>Planos de saúde individual ou coletivo/empresarial;</li>
            <li>Tratamentos Médicos Novos e Remédios Internacionais;</li>
            <li>Responsabilidade Civil dos Médicos, Dentistas e Hospitais; </li>
            <li>Problemas Contratuais (Reajustes abusivos ou negativas de cobertura).</li>
         </ul>
      </p>
      <p>
         Além dessas atuações, o VOPTA conta com uma equipe interdisciplinar, dedicada ao estudo e especialização na área da saúde, visando a atuação preventiva e consultiva para Hospitais, Clínicas de diagnóstico, Profissionais da saúde e Consultórios médicos e de odontologia.
      </p>
      <p>
         A equipe VOPTA, estuda o mercado de inovações e implementações de recursos preventivos jurídicos para seus clientes, buscando uma atuação conjunta de todos os ramos jurídicos que uma Clínica ou Hospital precisa, integrando o direito médico ao empresarial, tributário, seguro e resseguros, digital e outros que ajudam a elevar o sucesso de seus clientes. 
      </p>
      `,
    phone: "(11) 95233-0605",
    email: "mtofano@vopta.com.br"
};

//Monitora eventos click nos ítens de atuaçao, passando à função a classe clicada.

$(".item").click(function () { 
   var classe = this.className;
   $('#article-3').slideUp( 300 ).delay( 800 ).fadeIn( 400 );
   preparaItemChamado(classe.substring(5));
 });

 //Prepara a informação para entregar na DIV
function preparaItemChamado(atuacao){
   switch (atuacao) {
        case 'saude':
            apresentarDiv(areaSaude);
            break;
        case 'civil':
            apresentarDiv(areaCivil);
            break;
        case 'familia':
            apresentarDiv(areaFamilia);
            break;
        case 'imobiliario':
            apresentarDiv(areaImobiliario);
            break;
        case 'penal':
            apresentarDiv(areaPenal);
            break;
        case 'empresarial':
            apresentarDiv(areaEmpresarial);
            break;
        case 'digital':
            apresentarDiv(areaDigital);
            break;
        case 'consumidor':
            apresentarDiv(areaConsumidor);
            break;
         case 'trabalho':
      }   
}

function apresentarDiv(area){
   let apresentacao = `
      <div id="cont-apresentacao">
         <div class="header">
            <h5>`+area.title+`</h5>
         </div>
         <div class="content">
            `+area.content+`
         </div>
         <div class="footer">
            <p style="text-align:center;">Contato: `+area.phone+`<br>
               Email: `+area.email+`</p>
            <button type="button" id="btFechar" class="btn btn-secondary" data-bs-dismiss="modal" onclick="removeElem()">Fechar</button>
         </div>
      </div>
   `;
   document.getElementById('article-3').innerHTML=apresentacao;
   $(function () {
      $('html, body').animate({
         scrollTop: $("#cont-apresentacao").offset().top - 120 
      }, 'slow');
   });
}

function removeElem() {
   document.getElementById('cont-apresentacao').remove();
   $(function () {
      $('html').animate({
         scrollTop: $('#atuacao').offset().top -120
      }, 1600);
   });

}



// function apresentarDiv(infoAtuacao){
//     let dataInfo = document.querySelector('[data-info]');
//     dataInfo.className="container_atuacao";   
//     //exibe card do advogado
//     dataInfo.innerHTML=infoAtuacao.card;
//     // let foto = document.createElement('div');
//     // foto.className="apresentaFoto";
//     // dataInfo.appendChild(foto);




//     // let btn = document.createElement('button');
//     // btn.className="btnVoltar";
//     // btn.innerText="Voltar";
//     // dataInfo.appendChild(btn);

// }

/*
fonte: https://github.com/FlavioALeal/MascaraJS

Parametros da função mascara
A função máscara tem 3 parametros.

1º - o Modelo da máscara utilizado no input, como explicado acima, informe sempre a máscara entre aspas simples ou aspas duplas, parametro obrigatório
2º - não mude, sempre deve ser this, parametro obrigatório
3º - não mude, sempre deve ser event, parametro obrigatório
*/
function mascara(m,t,e){
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g,'');
    var l = texto.length;
    var lm = m.length;
    if(window.event) {                  
       id = e.keyCode;
    } else if(e.which){                 
       id = e.which;
    }
    cursorfixo=false;
    if(cursor < l)cursorfixo=true;
    var livre = false;
    if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
    ii=0;
    mm=0;
    if(!livre){
       if(id!=8){
          t.value="";
          j=0;
          for(i=0;i<lm;i++){
             if(m.substr(i,1)=="#"){
                t.value+=texto.substr(j,1);
                j++;
             }else if(m.substr(i,1)!="#"){
                      t.value+=m.substr(i,1);
                    }
                    if(id!=8 && !cursorfixo)cursor++;
                    if((j)==l+1)break;
                        
          } 	
       }
    }
    if(cursorfixo && !livre)cursor--;
      t.setSelectionRange(cursor, cursor);
}