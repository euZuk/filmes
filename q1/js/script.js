const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click',aranhaverso)
bt2.addEventListener('click',batman)
bt3.addEventListener('click',deadpool)
bt4.addEventListener('click',jurasic)

function aranhaverso(){
    capa.src = 'images/aranhaverso.jpg'
    sinopse.textContent = 'Em Homem-Aranha: Através do Aranhaverso, Miles Morales é catapultado através do multiverso e une forças com Gwen Stacy e uma Sociedade de Pessoas-Aranha de elite encarregada de proteger a própria existência do espaço-tempo. Contudo, quando os heróis entram em conflito sobre como lidar com a ameaça do vilão Mancha e com os inevitáveis "eventos canônicos" que definem a vida de cada teioso, Miles se vê confrontado por Miguel O´Hara (o Homem-Aranha 2099) e precisa redefinir o significado de ser um herói para salvar as pessoas que mais ama.'
}

function batman(){
    capa.src = 'images/batman.jpg'
    sinopse.textContent = 'Em Batman: O Cavaleiro das Trevas, o herói de Gotham City une forças com o tenente Jim Gordon e o obstinado promotor público Harvey Dent para desmantelar de vez o crime organizado que assola a cidade. O equilíbrio e a paz recém-conquistados são destruídos quando surge o Coringa, um gênio do crime anárquico e imprevisível que mergulha Gotham no caos absoluto, testando os limites psicológicos e morais do Homem-Morcego e forçando-o a cruzar a linha tênue entre o heroísmo e o vigilantismo.'
}

function deadpool(){
    capa.src = 'images/deadpool.jpg'
    sinopse.textContent = 'Em Deadpool, o ex-militar das Forças Especiais transformado em mercenário, Wade Wilson, adota um alter ego mascarado após ser submetido a um experimento clandestino que o deixa com poderes de cura acelerada, mas com o corpo completamente desfigurado. Armado com suas novas habilidades e um senso de humor negro e distorcido, ele caça implacavelmente Ajax, o homem que destruiu sua vida, enquanto tenta recuperar o amor de sua namorada, Vanessa, quebrando constantemente a quarta parede com o público.'
}

function jurasic(){
    capa.src = 'images/jurasic.jpg'
    sinopse.textContent = 'Em Jurassic Park: Parque dos Dinossauros, o bilionário John Hammond cria um parque de diversões revolucionário em uma ilha isolada, povoado por dinossauros vivos clonados a partir de DNA pré-histórico. Antes de abrir a atração ao público, ele convida um grupo de cientistas — incluindo o paleontólogo Alan Grant e a paleobotânica Ellie Sattler — e seus próprios netos para uma visita de vistoria; porém, após uma sabotagem no sistema de segurança, as criaturas pré-históricas escapam de suas jaulas, transformando a ilha em um cenário de sobrevivência extrema onde humanos se tornam as presas de predadores implacáveis.'
}
