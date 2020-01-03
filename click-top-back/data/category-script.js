const { sequelize } = require('../data/index');
const Category = sequelize.import('../models/category');

async function importData(){

    let map = new Map();

    data.forEach(element => {
        map.set(element.group_name, '');
    });


    for(let key of map.keys()){                
        await Category.create({name:key});  
    }

};

const data = [
    {name:'Adestradores', group_name:'Animais e Plantas'},
    {name:'Assistência Técnica Agropecuária', group_name:'Animais e Plantas'},
    {name:'Banho e Tosa', group_name:'Animais e Plantas'},
    {name:'Biólogos e Licenciamento Ambiental', group_name:'Animais e Plantas'},
    {name:'Canil', group_name:'Animais e Plantas'},
    {name:'Clínicas Veterinárias', group_name:'Animais e Plantas'},
    {name:'Gramas', group_name:'Animais e Plantas'},
    {name:'Hotel para Animais', group_name:'Animais e Plantas'},
    {name:'Jardinagem', group_name:'Animais e Plantas'},
    {name:'Paisagismo', group_name:'Animais e Plantas'},
    {name:'Pet-Shop', group_name:'Animais e Plantas'},
    {name:'Plantas', group_name:'Animais e Plantas'},
    {name:'Produtos Agropecuários', group_name:'Animais e Plantas'},
    {name:'Artesanato', group_name:'Artesanato'},
    {name:'Artes Plásticas', group_name:'Artesanato'},
    {name:'Bordados, Crochê e Tricô', group_name:'Artesanato'},
    {name:'Produtos Artesanais', group_name:'Artesanato'},
    {name:'Agências de Autos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Ar Condicionado Automotivo', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Auto Elétricos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Auto Moto Escolas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Baterias', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Borracharias', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Câmbios', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Caminhão Munck', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Carretos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Centro Automotivo', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Desmanches', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Despachantes', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Entregas Rápidas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Estacionamentos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Ferramentas Automotivas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Fretes', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Funilaria e Pintura', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Guinchos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Insul Film', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Lava Rápido', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Mecânicos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Moto Táxi e Motoboy', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Motos', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Mudanças', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Óleos, Lubrificantes e Filtros', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Peças Automotivas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Pneus', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Polimento e Cristalização', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Posto de Molas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Postos de Combustíveis', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Radiadores', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Retíficas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Som Automotivo e Acessórios', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Taxistas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Tintas Automotivas', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Transporte Escolar', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Transporte Universitário', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Transportes', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Vidro Automotivo', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Vistoria Veicular', group_name:'Automóveis, Veículos e Serviços'},
    {name:'Açougues',group_name:'Bebidas e Alimentos'},
    {name:'Adegas',group_name:'Bebidas e Alimentos'},
    {name:'Água Mineral',group_name:'Bebidas e Alimentos'},
    {name:'Água Potável',group_name:'Bebidas e Alimentos'},
    {name:'Bares',group_name:'Bebidas e Alimentos'},
    {name:'Bolos Caseiros',group_name:'Bebidas e Alimentos'},
    {name:'Bolos e Doces',group_name:'Bebidas e Alimentos'},
    {name:'Cantinas',group_name:'Bebidas e Alimentos'},
    {name:'Chocolaterias',group_name:'Bebidas e Alimentos'},
    {name:'Chocolates',group_name:'Bebidas e Alimentos'},
    {name:'Chopp',group_name:'Bebidas e Alimentos'},
    {name:'Consultoria Nutricional',group_name:'Bebidas e Alimentos'},
    {name:'Conveniência',group_name:'Bebidas e Alimentos'},
    {name:'Costelarias',group_name:'Bebidas e Alimentos'},
    {name:'Docerias',group_name:'Bebidas e Alimentos'},
    {name:'Doces e Salgados',group_name:'Bebidas e Alimentos'},
    {name:'Empório Gastronômico',group_name:'Bebidas e Alimentos'},
    {name:'Esfihas',group_name:'Bebidas e Alimentos'},
    {name:'Espetinhos e Carnes',group_name:'Bebidas e Alimentos'},
    {name:'Frango Assado',group_name:'Bebidas e Alimentos'},
    {name:'Lanchonetes',group_name:'Bebidas e Alimentos'},
    {name:'Marmita Saudável',group_name:'Bebidas e Alimentos'},
    {name:'Marmitex',group_name:'Bebidas e Alimentos'},
    {name:'Massas',group_name:'Bebidas e Alimentos'},
    {name:'Padarias e Confeitarias',group_name:'Bebidas e Alimentos'},
    {name:'Pães Doces e Salgados',group_name:'Bebidas e Alimentos'},
    {name:'Pães e Bolos Caseiros',group_name:'Bebidas e Alimentos'},
    {name:'Pastelarias',group_name:'Bebidas e Alimentos'},
    {name:'Peixarias',group_name:'Bebidas e Alimentos'},
    {name:'Pizzarias',group_name:'Bebidas e Alimentos'},
    {name:'Produtos Naturais',group_name:'Bebidas e Alimentos'},
    {name:'Refeições Coletivas',group_name:'Bebidas e Alimentos'},
    {name:'Restaurantes',group_name:'Bebidas e Alimentos'},
    {name:'Sorveterias',group_name:'Bebidas e Alimentos'},
    {name:'Supermercados, Mercados e Mercearias',group_name:'Bebidas e Alimentos'},
    {name:'Suplementos Alimentares',group_name:'Bebidas e Alimentos'},
    {name:'Temakerias',group_name:'Bebidas e Alimentos'},
    {name:'Varejão',group_name:'Bebidas e Alimentos'},
    {name:'Cama, Mesa e Banho',group_name:'Casa e Decoração'},
    {name:'Cortinas',group_name:'Casa e Decoração'},
    {name:'Decoração',group_name:'Casa e Decoração'},
    {name:'Estofados',group_name:'Casa e Decoração'},
    {name:'Floriculturas',group_name:'Casa e Decoração'},
    {name:'Lavagem de Tapetes',group_name:'Casa e Decoração'},
    {name:'Lavanderia de Estofados',group_name:'Casa e Decoração'},
    {name:'Lustres',group_name:'Casa e Decoração'},
    {name:'Marcenarias',group_name:'Casa e Decoração'},
    {name:'Móveis',group_name:'Casa e Decoração'},
    {name:'Móveis Rústicos',group_name:'Casa e Decoração'},
    {name:'Móveis Usados',group_name:'Casa e Decoração'},
    {name:'Tapeçarias',group_name:'Casa e Decoração'},
    {name:'Agências de Propaganda',group_name:' Comunicação e Publicidade'},
    {name:'Artes Gráficas',group_name:' Comunicação e Publicidade'},
    {name:'Assessoria de Comunicação',group_name:' Comunicação e Publicidade'},
    {name:'Brindes',group_name:' Comunicação e Publicidade'},
    {name:'Carro e Moto Som',group_name:' Comunicação e Publicidade'},
    {name:'Comunicação Visual',group_name:' Comunicação e Publicidade'},
    {name:'Convites / Gráficas',group_name:' Comunicação e Publicidade'},
    {name:'Desenvolvimento de Sites',group_name:' Comunicação e Publicidade'},
    {name:'Espaços Publicitários',group_name:' Comunicação e Publicidade'},
    {name:'Folhetos / Distribuição',group_name:' Comunicação e Publicidade'},
    {name:'Gráficas',group_name:' Comunicação e Publicidade'},
    {name:'Jornais',group_name:' Comunicação e Publicidade'},
    {name:'Marketing Digital',group_name:' Comunicação e Publicidade'},
    {name:'Portais e Sites',group_name:' Comunicação e Publicidade'},
    {name:'Construção, Reforma e Serviços',group_name:'Construção, Reforma e Serviços'},
    {name:'Andaimes',group_name:'Construção, Reforma e Serviços'},
    {name:'Aquecedores',group_name:'Construção, Reforma e Serviços'},
    {name:'Arquitetura',group_name:'Construção, Reforma e Serviços'},
    {name:'Artefatos de Cimento',group_name:'Construção, Reforma e Serviços'},
    {name:'Auto Vácuo',group_name:'Construção, Reforma e Serviços'},
    {name:'Automação de Portões',group_name:'Construção, Reforma e Serviços'},
    {name:'Azulejistas',group_name:'Construção, Reforma e Serviços'},
    {name:'Blocos',group_name:'Construção, Reforma e Serviços'},
    {name:'Caixa d´água',group_name:'Construção, Reforma e Serviços'},
    {name:'Calhas e Rufos',group_name:'Construção, Reforma e Serviços'},
    {name:'Cancelata',group_name:'Construção, Reforma e Serviços'},
    {name:'Carpintarias',group_name:'Construção, Reforma e Serviços'},
    {name:'Casa de Tintas',group_name:'Construção, Reforma e Serviços'},
    {name:'Churrasqueiras',group_name:'Construção, Reforma e Serviços'},
    {name:'Cimento',group_name:'Construção, Reforma e Serviços'},
    {name:'Construção Civil',group_name:'Construção, Reforma e Serviços'},
    {name:'Desentupidora',group_name:'Construção, Reforma e Serviços'},
    {name:'Elétrica / Eletrônica',group_name:'Construção, Reforma e Serviços'},
    {name:'Eletricistas',group_name:'Construção, Reforma e Serviços'},
    {name:'Engenharia',group_name:'Construção, Reforma e Serviços'},
    {name:'Escoras Metálicas',group_name:'Construção, Reforma e Serviços'},
    {name:'Esgoto',group_name:'Construção, Reforma e Serviços'},
    {name:'Ferragens Armadas',group_name:'Construção, Reforma e Serviços'},
    {name:'Forros, Gessos e Divisórias',group_name:'Construção, Reforma e Serviços'},
    {name:'Gesso',group_name:'Construção, Reforma e Serviços'},
    {name:'Hidráulica',group_name:'Construção, Reforma e Serviços'},
    {name:'Lajes e Ferragens',group_name:'Construção, Reforma e Serviços'},
    {name:'Limpa Fossa',group_name:'Construção, Reforma e Serviços'},
    {name:'Limpeza / Construção',group_name:'Construção, Reforma e Serviços'},
    {name:'Locação de Equipamentos',group_name:'Construção, Reforma e Serviços'},
    {name:'Madeiras',group_name:'Construção, Reforma e Serviços'},
    {name:'Marido de Aluguel',group_name:'Construção, Reforma e Serviços'},
    {name:'Mármore e Granito',group_name:'Construção, Reforma e Serviços'},
    {name:'Materiais de Construção',group_name:'Construção, Reforma e Serviços'},
    {name:'Materiais Elétricos',group_name:'Construção, Reforma e Serviços'},
    {name:'Pintores',group_name:'Construção, Reforma e Serviços'},
    {name:'Piscinas',group_name:'Construção, Reforma e Serviços'},
    {name:'Pisos Laminados',group_name:'Construção, Reforma e Serviços'},
    {name:'Poços Semi Artesianos',group_name:'Construção, Reforma e Serviços'},
    {name:'Portas e Portões',group_name:'Construção, Reforma e Serviços'},
    {name:'Pré-Moldados',group_name:'Construção, Reforma e Serviços'},
    {name:'Projetos / Construção',group_name:'Construção, Reforma e Serviços'},
    {name:'Raspagem de Assoalhos',group_name:'Construção, Reforma e Serviços'},
    {name:'Reforma e Manutenção Residencial',group_name:'Construção, Reforma e Serviços'},
    {name:'Remoção',group_name:'Construção, Reforma e Serviços'},
    {name:'Remoção de Entulho',group_name:'Construção, Reforma e Serviços'},
    {name:'Reservatório de Água',group_name:'Construção, Reforma e Serviços'},
    {name:'Serralheiros',group_name:'Construção, Reforma e Serviços'},
    {name:'Serviços Gerais',group_name:'Construção, Reforma e Serviços'},
    {name:'Terraplenagem',group_name:'Construção, Reforma e Serviços'},
    {name:'Tintas Imobiliárias',group_name:'Construção, Reforma e Serviços'},
    {name:'Toldos e Coberturas',group_name:'Construção, Reforma e Serviços'},
    {name:'Topografia',group_name:'Construção, Reforma e Serviços'},
    {name:'Vidraçarias',group_name:'Construção, Reforma e Serviços'},
    {name:'Artigos Religiosos',group_name:'Educação e Cultura'},
    {name:'Aulas de Dança',group_name:'Educação e Cultura'},
    {name:'Aulas de Idiomas',group_name:'Educação e Cultura'},
    {name:'Aulas de Música',group_name:'Educação e Cultura'},
    {name:'Aulas de Reforço Escolar',group_name:'Educação e Cultura'},
    {name:'Berçário',group_name:'Educação e Cultura'},
    {name:'Colégios',group_name:'Educação e Cultura'},
    {name:'Cursos',group_name:'Educação e Cultura'},
    {name:'Cursos de Idiomas',group_name:'Educação e Cultura'},
    {name:'Cursos Profissional',group_name:'Educação e Cultura'},
    {name:'Educação Infantil',group_name:'Educação e Cultura'},
    {name:'Igrejas',group_name:'Educação e Cultura'},
    {name:'Notícias',group_name:'Educação e Cultura'},
    {name:'Psicopedagogia',group_name:'Educação e Cultura'},
    {name:'Aluguel de Artigos para Festas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Animação de Festas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Aniversários',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Artigos para Festas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Artistas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Bar Man',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Bolos e Doces Artísticos',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Bolos, Doces e Salgados',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Brinquedos Infláveis',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Buffets',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Casamentos',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Chácaras e Sítios',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Convites',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Convites e Lembrancinhas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Creperia e Lanchonete',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Decoração de Festas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'DJ',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Foto e Vídeo',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Fotografia',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Gelo',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Lazer',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Lembrancinhas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Local para Festas',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Pães Doces e Salgados',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Pizzas para Eventos',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Sonorização',group_name:'Entretenimento, Festas e Eventos'},
    {name:'Academias',group_name:'Esporte e Lazer'},
    {name:'Artigos para Pesca',group_name:'Esporte e Lazer'},
    {name:'Aulas de Dança',group_name:'Esporte e Lazer'},
    {name:'Bicicletarias',group_name:'Esporte e Lazer'},
    {name:'Clubes',group_name:'Esporte e Lazer'},
    {name:'Náutica',group_name:'Esporte e Lazer'},
    {name:'Nutrição',group_name:'Esporte e Lazer'},
    {name:'Paintball',group_name:'Esporte e Lazer'},
    {name:'Pesqueiros',group_name:'Esporte e Lazer'},
    {name:'Pilates',group_name:'Esporte e Lazer'},
    {name:'Redes Esportivas',group_name:'Esporte e Lazer'},
    {name:'Yoga',group_name:'Esporte e Lazer'},
    {name:'Assistência Técnica em Informática',group_name:'Informática e Papelaria'},
    {name:'Equipamentos de Informática',group_name:'Informática e Papelaria'},
    {name:'Internet Banda Larga',group_name:'Informática e Papelaria'},
    {name:'Papelarias',group_name:'Informática e Papelaria'},
    {name:'Sistemas e Programação',group_name:'Informática e Papelaria'},
    {name:'Suprimentos de Informática',group_name:'Informática e Papelaria'},
    {name:'Tintas p/ Impressoras',group_name:'Informática e Papelaria'},
    {name:'Antenas Parabólicas',group_name:'Produtos e Variedades'},
    {name:'Carimbos',group_name:'Produtos e Variedades'},
    {name:'Celulares',group_name:'Produtos e Variedades'},
    {name:'Compressores de Ar',group_name:'Produtos e Variedades'},
    {name:'Eletrodomésticos',group_name:'Produtos e Variedades'},
    {name:'Embalagens Descartáveis',group_name:'Produtos e Variedades'},
    {name:'Extintores',group_name:'Produtos e Variedades'},
    {name:'Fixação',group_name:'Produtos e Variedades'},
    {name:'Gás',group_name:'Produtos e Variedades'},
    {name:'Instrumentos Musicais',group_name:'Produtos e Variedades'},
    {name:'Lenha',group_name:'Produtos e Variedades'},
    {name:'Limpeza / Produtos',group_name:'Produtos e Variedades'},
    {name:'Mangueiras e Conexões',group_name:'Produtos e Variedades'},
    {name:'Máquinas de Costura',group_name:'Produtos e Variedades'},
    {name:'Parafusos',group_name:'Produtos e Variedades'},
    {name:'Plásticos',group_name:'Produtos e Variedades'},
    {name:'Presentes',group_name:'Produtos e Variedades'},
    {name:'Refrigeração',group_name:'Produtos e Variedades'},
    {name:'Sex Shop',group_name:'Produtos e Variedades'},
    {name:'Tabacarias',group_name:'Produtos e Variedades'},
    {name:'Variedades',group_name:'Produtos e Variedades'},
    {name:'Vedação',group_name:'Produtos e Variedades'},
    {name:'Vedação Industrial',group_name:'Produtos e Variedades'},
    {name:'Vídeo Games',group_name:'Produtos e Variedades'},
    {name:'Acessórios Femininos',group_name:'Roupas e Acessórios'},
    {name:'Alfaiates',group_name:'Roupas e Acessórios'},
    {name:'Aluguel de Trajes',group_name:'Roupas e Acessórios'},
    {name:'Armarinhos',group_name:'Roupas e Acessórios'},
    {name:'Artigos para Customização',group_name:'Roupas e Acessórios'},
    {name:'Bolsas',group_name:'Roupas e Acessórios'},
    {name:'Calçados',group_name:'Roupas e Acessórios'},
    {name:'Camisetas',group_name:'Roupas e Acessórios'},
    {name:'Conserto de Roupas',group_name:'Roupas e Acessórios'},
    {name:'Costureiras',group_name:'Roupas e Acessórios'},
    {name:'Equipamentos de Proteção Individual',group_name:'Roupas e Acessórios'},
    {name:'Fraldas',group_name:'Roupas e Acessórios'},
    {name:'Jeans',group_name:'Roupas e Acessórios'},
    {name:'Jóias, Semi Jóias e Bijuterias',group_name:'Roupas e Acessórios'},
    {name:'Lingeries',group_name:'Roupas e Acessórios'},
    {name:'Magazines',group_name:'Roupas e Acessórios'},
    {name:'Moda Feminina',group_name:'Roupas e Acessórios'},
    {name:'Moda Feminina e Masculina',group_name:'Roupas e Acessórios'},
    {name:'Moda Infantil',group_name:'Roupas e Acessórios'},
    {name:'Moda Infanto Juvenil',group_name:'Roupas e Acessórios'},
    {name:'Moda Jovem',group_name:'Roupas e Acessórios'},
    {name:'Moda Masculina',group_name:'Roupas e Acessórios'},
    {name:'Moda Plus Size',group_name:'Roupas e Acessórios'},
    {name:'Pijamas e Presentes',group_name:'Roupas e Acessórios'},
    {name:'Plus Size',group_name:'Roupas e Acessórios'},
    {name:'Relojoarias',group_name:'Roupas e Acessórios'},
    {name:'Uniformes',group_name:'Roupas e Acessórios'},
    {name:'Acupuntura',group_name:'Saúde, Estética e Beleza'},
    {name:'Barbearias',group_name:'Saúde, Estética e Beleza'},
    {name:'Cabeleireiros',group_name:'Saúde, Estética e Beleza'},
    {name:'Cardiologistas',group_name:'Saúde, Estética e Beleza'},
    {name:'Clínicas de Estética',group_name:'Saúde, Estética e Beleza'},
    {name:'Convênios, Clínicas e Laboratórios',group_name:'Saúde, Estética e Beleza'},
    {name:'Cosmético e Perfumaria',group_name:'Saúde, Estética e Beleza'},
    {name:'Dentistas',group_name:'Saúde, Estética e Beleza'},
    {name:'Dentistas / Equipamentos',group_name:'Saúde, Estética e Beleza'},
    {name:'Depilação',group_name:'Saúde, Estética e Beleza'},
    {name:'Drogarias',group_name:'Saúde, Estética e Beleza'},
    {name:'Exame de Vista',group_name:'Saúde, Estética e Beleza'},
    {name:'Farmácias e Drogarias',group_name:'Saúde, Estética e Beleza'},
    {name:'Fisioterapia',group_name:'Saúde, Estética e Beleza'},
    {name:'Fonoaudiologia',group_name:'Saúde, Estética e Beleza'},
    {name:'Fraldas',group_name:'Saúde, Estética e Beleza'},
    {name:'Ginecologistas',group_name:'Saúde, Estética e Beleza'},
    {name:'Iridologia',group_name:'Saúde, Estética e Beleza'},
    {name:'Manicure e Pedicure',group_name:'Saúde, Estética e Beleza'},
    {name:'Massagens Terapêuticas',group_name:'Saúde, Estética e Beleza'},
    {name:'Oftalmologia',group_name:'Saúde, Estética e Beleza'},
    {name:'Óticas',group_name:'Saúde, Estética e Beleza'},
    {name:'Otorrinolaringologistas',group_name:'Saúde, Estética e Beleza'},
    {name:'Piercing',group_name:'Saúde, Estética e Beleza'},
    {name:'Pilates',group_name:'Saúde, Estética e Beleza'},
    {name:'Planos de Saúde',group_name:'Saúde, Estética e Beleza'},
    {name:'Podologia',group_name:'Saúde, Estética e Beleza'},
    {name:'Psicólogos e Psicanalistas',group_name:'Saúde, Estética e Beleza'},
    {name:'Psicopedagogia',group_name:'Saúde, Estética e Beleza'},
    {name:'Tatuagens',group_name:'Saúde, Estética e Beleza'},
    {name:'Terapia Auricular',group_name:'Saúde, Estética e Beleza'},
    {name:'Terapias Holísticas',group_name:'Saúde, Estética e Beleza'},
    {name:'Administração de Condomínios',group_name:'Serviços'},
    {name:'Administração de Imóveis',group_name:'Serviços'},
    {name:'Advogados',group_name:'Serviços'},
    {name:'Afiação',group_name:'Serviços'},
    {name:'Assistência Técnica',group_name:'Serviços'},
    {name:'Bombeiros',group_name:'Serviços'},
    {name:'Cartórios e Tabeliões',group_name:'Serviços'},
    {name:'Certificação Digital',group_name:'Serviços'},
    {name:'Chaveiros',group_name:'Serviços'},
    {name:'Conserto de Fogão',group_name:'Serviços'},
    {name:'Contadores e Escritórios de Contabilidade',group_name:'Serviços'},
    {name:'Crédito Pessoal',group_name:'Serviços'},
    {name:'Dedetização',group_name:'Serviços'},
    {name:'Empilhadeiras',group_name:'Serviços'},
    {name:'Empréstimos',group_name:'Serviços'},
    {name:'Financiamentos',group_name:'Serviços'},
    {name:'Funerárias',group_name:'Serviços'},
    {name:'Hotelaria',group_name:'Serviços'},
    {name:'Imobiliárias',group_name:'Serviços'},
    {name:'Lava e Passa',group_name:'Serviços'},
    {name:'Lavanderias',group_name:'Serviços'},
    {name:'Limpeza / Serviços',group_name:'Serviços'},
    {name:'Mediação e Arbitragem',group_name:'Serviços'},
    {name:'Monitoramento',group_name:'Serviços'},
    {name:'Montagem e Desmontagem de Móveis',group_name:'Serviços'},
    {name:'Motores Elétricos',group_name:'Serviços'},
    {name:'Networking Estratégico Empresarial',group_name:'Serviços'},
    {name:'Projetos / Execução',group_name:'Serviços'},
    {name:'Reciclagem',group_name:'Serviços'},
    {name:'Refrigeração',group_name:'Serviços'},
    {name:'Segurança',group_name:'Serviços'},
    {name:'Seguros',group_name:'Serviços'},
    {name:'Telefonia',group_name:'Serviços'},
    {name:'TV por Assinatura',group_name:'Serviços'},
    {name:'TV/Áudio/Vídeo',group_name:'Serviços'},
    {name:'Viagens e Turismo',group_name:'Serviços'},
];


module.exports = {importData };