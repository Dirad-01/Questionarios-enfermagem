// =====================================================
// CONFIGURAÇÕES
// =====================================================

const opcoes = {
  membro: ["MID", "MIE","MSD","MSE"],
  TipoTCRM: ["Henetix", "Dotarem", "Outro"],
  Coronaria: ["Henetix"],
  Referindo: ["Henetix", "Outro"],
  ExameCoronaria: ["Henetix", "Outro"],
  Realizados: ["Scout, elevação do membro", "Outro"],
  Calibre: ["18", "20", "22", "24"], 
  encaminhado: ["deambulando", "maca"], 
  acompanhado: ["familiares", "enfermagem"],
  para: ["domicilio", "leito de internamento"],
  Seringa: ["3ML", "5ML","10ML","20ML","60ML"],
  Agulha: ["25x7", "40x12","30x7"],
  Esparadrapo: ["comum", "antialérgico"],
  Luva: ["P", "M","Estéreo"],
  administrado: ["1", "2","3","4"],
  Equipo: ["Macro gotas", "Micro gotas"],
  bacteriano: ["Adulto", "Pediátrico"],
  Extensor: ["20", "40","60"],
  soro: ["100ML", "250ML","500ML"],
  mascara: ["2", "2,5","3","3,5","4"],
  cateter: ["18", "20","22","24"],
};

// =====================================================
// MODELOS – COMPLETOS E AJUSTADOS
// =====================================================

const modelos = {

  contrasteExterno: {
    titulo: "Contraste Externo",
    texto: `
Paciente externo realizou questionário e anamnese em anexo. Realizo punção de acesso venoso periférico na _____ tentativa, membro puncionado: _____. Calibre do cateter: _____ G. Realizo teste de contraste via venosa: Tipo _____, volume _____ administrado: _____ frasco, lote _____, validade _____ em BIC, com 2 seringas angiografica e válvula anti-refluxo, conforme protocolo, sem intercorrências.
Paciente liberado para domicílio em ar ambiente, orientado, nega dor, acompanhado por familiares. Orientações pós contraste fornecidas.

Matérias descartáveis utilizados:

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["number", "membro", "Calibre", "TipoTCRM", "number","administrado",
             "","data","Esparadrapo","number","Seringa","number","Agulha",
             "number","","number","Luva","number","","number",""]
  },

  tomog: {
    titulo: "Contraste Emergencia",
    texto: `
Paciente proveniente da emergência com punção no membro: _____ Calibre do cateter: _____ G, realizo teste de infusão pré exame, conforme protocolo. 
Administrado Contraste via venosa: Tipo _____ volume _____ administrado: _____ frasco, lote _____, validade _____ em BIC, com 2 seringas angiografica e válvula anti-refluxo, conforme protocolo, sem intercorrências.
Encaminho paciente para setor de origem em cadeira de rodas, em ambiente, orientado, nega dor, acompanhado por familiares, enfermagem, oriento pós contraste.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["membro", "Calibre", "TipoTCRM", "number","administrado","","data",
             "Esparadrapo","number","Seringa","number","Agulha","number",
             "","number","Luva","number","","number","" ]
  },

  contrasteInterno: {
    titulo: "Contraste Interno",
    texto: `
Recebo paciente com acesso venoso prévio. Membro puncionado: _____. Calibre do cateter: _____ G. Realizo teste de infusão pré exame conforme protocolo.
Administrado contraste via venosa: Tipo _____,volume _____ administrado: _____ frasco, lote _____, validade _____ em BIC, com 2 seringas angiografica e válvula anti-refluxo, sem intercorrências.
Paciente encaminhado ao setor de origem em ar ambiente, orientado, nega dor, acompanhado por familiares. Orientações pós contraste fornecidas.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["membro", "Calibre", "TipoTCRM", "number","administrado","","data",
             "Esparadrapo","number","Seringa","number","Agulha","number",
             "","number","Luva","number","","number","" ]
  },

  dacrio: {
    titulo: "Dacriotomografia",
    texto: `
Paciente externo vem para realizar exame Dacriotomografia com contraste.
Realizada diluição: 50% Henetix + 50% SF 0,9%. Administrado 2 gotas em cada olho em três ciclos.
Paciente posicionado conforme protocolo. Documentação anexada. Procedimento realizado sem intercorrências.
`,
    campos: []
  },

  semContraste: {
    titulo: "Exame Sem Contraste",
    texto: `
Paciente externo vem para realizar exame sem contraste. Posicionado conforme protocolo, documentação anexada, procedimento realizado sem intercorrências.
Paciente proveniente da emergência para exame sem contraste. Posicionado conforme protocolo, exame realizado sem intercorrências.
Paciente interno vem para exame sem contraste. Posicionado conforme protocolo, exame realizado sem intercorrências.
`,
    campos: []
  },

  coronaria: {
    titulo: "Exame Coronária",
    texto: `
Paciente admitido no setor para tomografia computadorizada coronariana.
Realizada orientação prévia quanto ao procedimento, posicionamento e necessidade de colaboração em apneias. Realizo questionário e anamnese em anexo.
Realizo punção de acesso venoso periférico na _____ tentativa, membro puncionado: _____. Calibre do cateter: 18G. Teste de infusão realizado conforme protocolo.
Sinais vitais monitorizados antes e após o exame, estáveis. Medicação administrada conforme prescrição.
Acesso com bom fluxo, utilizado para infusão do meio iodado: Tipo _____, volume _____ administrado: _____ frasco, lote _____, validade _____ 
em BIC, com 2 seringas angiografica e válvula anti-refluxo, sem intercorrências.
Paciente colaborativo, tolerou bem o procedimento, encaminhado em cadeira de rodas, orientado, sinais vitais normais.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["number", "membro", "TipoTCRM", "number",
             "administrado","","data","Esparadrapo","number",
             "Seringa","number","Agulha","number","","number","Luva","number","","number",""]
  },

  extravasamentoExterno: {
    titulo: "Extravasamento Externo",
    texto: `
Paciente externo realizou questionário e anamnese em anexo.
Punção realizada na _____ tentativa, membro puncionado: _____. Calibre do cateter: _____ G. Teste de infusão pré exame conforme protocolo.
Durante administração de contraste: Tipo _____, volume _____ administrado: _____ frasco, lote _____, validade _____, apresentou extravasamento.
Realizado scalt, retirada imediata do acesso, compressa fria aplicada e elevação do membro.
Paciente referindo _____. Cuidados realizados: _____. Encaminhado para avaliação médica ou vascular conforme protocolo.
Conduta: compressa fria intermitente, vigilância do membro, orientar retorno se dor intensa, edema progressivo ou alteração de perfusão.
Paciente orientado, compreensivo, evoluindo estável. Liberado para domicílio acompanhado. Notificação preenchida.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["number", "membro", "Calibre", "TipoTCRM", "number",
             "administrado", "","data","","Realizados","Esparadrapo",
             "number","Seringa","number","Agulha","number","","number",
             "Luva","number","","number",""]
  },

  extravasamentoInterno: {
    titulo: "Extravasamento Interno",
    texto: `
Paciente interno com acesso venoso prévio funcional. Membro puncionado: _____.
Calibre do cateter: _____ G.
Durante administração de contraste: Tipo _____, volume _____ administrado: _____ frasco, lote _____, validade _____ , apresentou extravasamento.
Realizado scalt, retirada imediata do acesso, compressa fria local aplicada e elevação do membro. Paciente referindo _____. Cuidados realizados: _____. Encaminhado para avaliação médica ou vascular conforme protocolo.
Conduta: compressa fria intermitente, vigilância do membro, retorno imediato em caso de dor intensa, edema ou alteração de perfusão.
Paciente orientado e estável, retornando ao setor. Notificação preenchida.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["membro", "Calibre", "TipoTCRM", "number", "administrado",
             "","data","Referindo","Realizados","Esparadrapo","number",
             "Seringa","number","Agulha","number","","number","Luva","number","","number",""]
  },

  sedacao: {
    titulo: "Paciente com Sedação",
    texto: `
Paciente submetido a exame com sedação. Apresentou recuperação anestésica adequada: consciente, orientado, deambulando sem intercorrências e em ar ambiente. Sinais vitais estáveis.
Orientações pós exame fornecidas: repouso, hidratação, evitar dirigir e atividades de risco.
Encaminhado ao setor/alta acompanhado por familiar.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Oxigênio:  _____
Equipo:  _____, quantidade: _____
Eletrodo:  _____Unidade
Látex para oxigênio:  _____ Unidade
Filtro bacteriano:  _____
Extensor:  _____, quantidade: _____
Válvula antirefluxo:  _____ Unidade
Soro fisiológico:  _____, quantidade: _____
Mascara laríngea:  _____, quantidade: _____
Cateter periférico:  _____, quantidade: _____
Outros:  _____, quantidade: _____

`,
    campos: ["Esparadrapo","number","Seringa","number","Agulha","number","","number","Luva","number",
             "tempo","Equipo","number","number","number","bacteriano","Extensor","number","number","soro",
             "number","mascara","number","cateter","number","","number",""]
  },

  semContrasteExterno: {
    titulo: "Sem Contraste (Externo)",
    texto: `
Paciente externo vem para realizar exame sem contraste. Posicionado conforme protocolo. Documentação anexada. Procedimento realizado sem intercorrências.

Matérias descartáveis utilizados: 

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____ 
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["Esparadrapo","number","Seringa","number","Agulha","number","","number","Luva","number","","number",""]
  },
    pelveContraste: {
    titulo: "RM Pelve com Contraste",
    texto: `
Realizo protocolo de identificação do paciente conforme protocolo institucional, com checagem da pulseira e conferência de dados de segurança. Oriento sobre o exame, esclarecendo dúvidas e aplicando os questionários de triagem preconizados.
Verificados os sinais vitais, devidamente anotados em prontuário. Realizei punção venosa periférica com cateter calibre _____, em membro _____, obtendo sucesso na _____ tentativa.
Foi realizado teste de permeabilidade com 10 mL de soro fisiológico, acesso pérvio e sem sinais de intercorrências.
Paciente posicionado em sala de exame conforme padrão para RM de pelve. Iniciei o preparo conforme protocolo institucional: administração de _____ mL de soro via vaginal e _____ mL de soro via retal, sem queixas.
Em seguida administrei Buscopan conforme prescrição médica, através do acesso venoso.
Realizada administração do contraste _____ em BIC, _____ frasco, lote _____, validade _____, com 2 seringas angiográficas e válvula anti refluxo, conforme prescrição.
Exame finalizado sem intercorrências. Paciente orientado e liberado em boas condições clínicas.

Matérias descartáveis utilizados:

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: ["Calibre","membro","number","TipoTCRM","number","TipoTCRM",
			"number","","data","Esparadrapo","number","Seringa","number",
			"Agulha","number","","number","Luva","number","","number",""]
  },

  colonoVirtual: {
    titulo: "Tomografia de Colono Virtual",
    texto: `
Paciente admitido no setor para realização de tomografia de colono virtual. Realizada identificação conforme protocolo institucional. Orientado quanto ao exame e etapas.
Realizei aplicação de xilocaína gel, seguida da introdução de sonda retal nº 16, com boa aceitação. Procedimento conduzido pelo médico responsável.
Exame realizado com sucesso, sem intercorrências. Paciente orientado e liberado posteriormente.

Matérias descartáveis utilizados:

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: [
      "Esparadrapo","number","Seringa","number","Agulha","number",
      "","number","Luva","number","","number",""
    ]
  },

  entero: {
    titulo: "Entero RM / Entero Tomo",
    texto: `
Paciente admitido para realização de Enterografia. Identificação conferida conforme protocolo institucional. Verifico sinais vitais.
Preparo iniciado conforme prescrição: solução com laxante osmótico utilizando _____ sachês/doses diluídos em 1 litro de água. Paciente orientado quanto à ingestão e realizou sem queixas.
Após tempo adequado, paciente encaminhado para exame e posicionado conforme protocolo.
Exame concluído sem eventos adversos. Paciente estável e orientado após o procedimento.

Matérias descartáveis utilizados:

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: [
      "number","Esparadrapo","number","Seringa","number","Agulha",
      "number","","number","Luva","number","","number",""
    ]
  },

  Biopsiasedacao: {
    titulo: "Biópsia com Sedação / Interno e Externo",
    texto: `
Paciente admitido para biópsia guiada por tomografia. Identificação conferida conforme protocolo institucional. Triagem pré-anestésica realizada. Monitorização instalada.
Punção venosa periférica com cateter _____, teste de permeabilidade com 10 mL de SF 0,9% realizado.
Anestesia conduzida pelo anestesiologista, monitorização contínua pela enfermagem. Procedimento realizado sem intercorrências.
Curativo estéril aplicado ao término. Monitorização até recuperação anestésica. Paciente orientado e encaminhado em _____, acompanhado por _____, para _____.

Matérias descartáveis utilizados:

Esparadrapo: _____, quantidade: _____
Seringa: _____, quantidade: _____
Agulha:  _____, quantidade: _____
Gase:    _____, quantidade: _____
Luva:    _____, quantidade: _____
Outros:  _____, quantidade: _____
`,
    campos: [
      "Calibre","encaminhado","acompanhado","para",
      "Esparadrapo","number","Seringa","number","Agulha","number",
      "","number","Luva","number","","number",""
    ]
  }


  // Se tiver mais modelos, podem ser mantidos aqui...
};

// =====================================================
// GERAR LISTA
// =====================================================

window.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("modelList");
  lista.innerHTML = "";

  Object.keys(modelos).forEach(key => {
    const item = document.createElement("button");
    item.className = "model-item";
    item.textContent = modelos[key].titulo;
    item.dataset.key = key;
    item.onclick = () => abrirModelo(key);
    lista.appendChild(item);
  });
});

// =====================================================
// ABRIR MODELO
// =====================================================

function abrirModelo(key) {
  const model = modelos[key];
  const box = document.getElementById("textArea");
  const title = document.getElementById("titleArea");

  document.querySelectorAll(".model-item")
    .forEach(m => m.classList.toggle("active", m.dataset.key === key));

  title.textContent = model.titulo;

  const partes = model.texto.split("_____");
  const campos = model.campos;
  let pos = 0;

  const frag = document.createDocumentFragment();

  partes.forEach((txt, i) => {
    frag.appendChild(document.createTextNode(txt));

    if (i < partes.length - 1) {
      const tipo = campos[pos++] || "text";

      const input = document.createElement("input");
      input.className = "fillField";

      // ==========================
      // SUPORTE PARA INPUT DATE
      // ==========================
      if (tipo === "number") {
        input.type = "number";
      } else if (tipo === "data") {
        input.type = "date";
      } else if (opcoes[tipo]) {
        input.type = "text";
        input.dataset.key = tipo;
        input.addEventListener("focus", () => mostrarSugestoes(input, true));
        input.addEventListener("input", () => mostrarSugestoes(input));
        input.addEventListener("keydown", navegarSugestoes);
      } else {
        input.type = "text";
      }

      frag.appendChild(input);
    }
  });

  box.innerHTML = "";
  box.appendChild(frag);

  box.classList.remove("hidden");
  document.getElementById("copyBtn").classList.remove("hidden");
}

// =====================================================
// AUTOCOMPLETE — POSICIONAMENTO AJUSTADO
// =====================================================

function mostrarSugestoes(input, mostrarTudo = false) {
  removerSugestoes();

  const lista = opcoes[input.dataset.key];
  if (!lista) return;

  const filtro = mostrarTudo
    ? lista
    : lista.filter(op => op.toLowerCase().includes(input.value.toLowerCase()));

  const box = document.createElement("div");
  box.className = "suggestBox";

  filtro.forEach(op => {
    const item = document.createElement("div");
    item.className = "suggestItem";
    item.textContent = op;
    item.onclick = () => {
      input.value = op;
      removerSugestoes();
    };
    box.appendChild(item);
  });

  // Posiciona a caixa de sugestões relativa ao input
  const parent = input.parentElement;
  const offsetTop = input.offsetTop + input.offsetHeight;
  box.style.position = "absolute";
  box.style.left = input.offsetLeft + "px";
  box.style.top = offsetTop + "px";
  box.style.width = input.offsetWidth + "px";
  box.style.zIndex = 9999;

  parent.appendChild(box);
  input._box = box;
}

function removerSugestoes() {
  document.querySelectorAll(".suggestBox").forEach(e => e.remove());
}

// =====================================================
// NAVEGAÇÃO DE TECLADO NAS SUGESTÕES
// =====================================================

function navegarSugestoes(e) {
  const box = this._box;
  if (!box) return;

  const items = [...box.children];
  let idx = items.findIndex(i => i.classList.contains("highlight"));

  if (e.key === "ArrowDown") {
    e.preventDefault();
    idx = (idx + 1) % items.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    idx = (idx - 1 + items.length) % items.length;
  } else if (e.key === "Enter") {
    e.preventDefault();
    items[idx]?.click();
    return;
  }

  items.forEach(i => i.classList.remove("highlight"));
  if (idx >= 0) {
    items[idx].classList.add("highlight");
  }
}

document.addEventListener("click", e => {
  if (!e.target.classList.contains("fillField")) {
    removerSugestoes();
  }
});

// =====================================================
// COPIAR TEXTO — AVISA SE FALTAR CAMPOS, MAS COPIA
// =====================================================

async function copyText() {
  const box = document.getElementById("textArea");
  const inputs = box.querySelectorAll("input");

  let faltando = false;
  for (let inp of inputs) {
    if (inp.value.trim() === "") {
      faltando = true;
      break;
    }
  }

  // Remove banners anteriores
  document.querySelectorAll(".copyBanner").forEach(b => b.remove());
  document.querySelectorAll(".warningBanner").forEach(b => b.remove());

  // Se existem campos vazios → mostra alerta no canto esquerdo
  if (faltando) {
    const aviso = document.createElement("div");
    aviso.className = "warningBanner";
    aviso.style.position = "fixed";
    aviso.style.left = "24px";
    aviso.style.bottom = "24px";
    aviso.style.background = "#8b6a2a";
    aviso.style.color = "white";
    aviso.style.padding = "14px 20px";
    aviso.style.borderRadius = "12px";
    aviso.style.fontWeight = "600";
    aviso.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
    aviso.textContent =
      "⚠ Existem campos vazios. Mesmo assim o texto foi copiado.";
    document.body.appendChild(aviso);

    setTimeout(() => aviso.remove(), 2000);
  }

  // Copiar texto mesmo assim
  const clone = box.cloneNode(true);

  clone.querySelectorAll("input").forEach(inp => {
    const span = document.createElement("span");
    span.textContent = inp.value.trim() !== "" ? inp.value : "_____";
    inp.replaceWith(span);
  });

  await navigator.clipboard.writeText(clone.innerText);

  // Delay leve para que o aviso não se sobreponha ao banner de cópia
  setTimeout(() => {
    const banner = document.createElement("div");
    banner.className = "copyBanner";
    banner.style.position = "fixed";
    banner.style.right = "24px";
    banner.style.bottom = "24px";
    banner.style.background = "#5d3f16";
    banner.style.color = "white";
    banner.style.padding = "14px 20px";
    banner.style.borderRadius = "12px";
    banner.style.fontWeight = "600";
    banner.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
    banner.textContent = "✔ Texto copiado!";
    document.body.appendChild(banner);

    setTimeout(() => banner.remove(), 2000);
  }, faltando ? 300 : 0);
}
