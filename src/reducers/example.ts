import * as actionTypes from '../actions/types/example';

export interface IExampleReducer {
    Notes: Array<object>,
    Twitters:Array<object>,
    Articles: Array<object>
}

const defaultState = (): IExampleReducer => ({
    Notes: [{
        id:1,
        typeCard: 'Notes',
        title: "Notatka numer jeden",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet."
    },{
        id:2,
        typeCard: 'Notes',
        title: "Notatka numer dwa",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet."
    },{
        id:3,
        typeCard: 'Notes',
        title: "Notatka numer trzy",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque ats libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet."
    },{
        id:4,
        typeCard: 'Notes',
        title: "Notatka numer cztery",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet."
    },
    {
        id:5,
        typeCard: 'Notes',
        title: "Notatka numer pięć",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique, tellus in faucibus luctus, nisl massa tempor orci, in vehicula lacus ante et nisi. Pellentesque at libero dapibus, fringilla quam in, tempor dui. Suspendisse semper rhoncus volutpat. Nam finibus bibendum tortor et imperdiet."
        
    }],
    Twitters: [{
        id:0,
        typeCard: 'Twitters',
        title: "#GrarantannaCup",
        content: "Wychodząc naprzeciw wszystkim stęsknionym za sportem, wraz z Ministerstwem Cyfryzacji, zapraszamy do turnieju #GrarantannaCup: http://grarantanna.pl. Od dzisiaj znajdziecie mnie także na Tik Toku! Szukajcie pod nazwą: AndrzejDudaNaTikToku. 😉",
        twitterName: 'AndrzejDuda',
        link: 'https://twitter.com/AndrzejDuda/status/1244598402077413376'
    },
    {
        id:1,
        typeCard: 'Twitters',
        title: "Robert Lewandowski",
        content: "Thank you for all your kind words of support🙏  Keep your fingers crossed.  I'll be back soon and I'll be ready to fight 🤜🤛",
        twitterName: 'lewy_official',
        link: 'https://twitter.com/lewy_official/status/1232743787593641984'
    }],
    Articles: [{
        id:0,
        typeCard: 'Articles',
        title: "Sensacyjne doniesienia włoskich mediów, Piątek wróci do Milanu?",
        content: 'Dziennikarze włoskiego "Corriere dello Sport" uważają, że już niedługo może dojść do sensacyjnego powrotu Krzysztofa Piątka do Milanu. Polak mógłby ponownie rywalizować na boiskach Serie A na zasadzie wypożyczenia lub utajnionej klauzuli w umowie.',
        link: 'https://sport.onet.pl/pilka-nozna/liga-wloska/pilka-nozna-krzysztof-piatek-moze-wrocic-do-ac-milan/s6knwtd'
    },
    {
        id:1,
        typeCard: 'Articles',
        title: "Białoruś to jedyny kraj w Europie, w którym toczą się rozgrywki piłkarskie",
        content: 'Pandemia koronawirusa spowodowała, że sport niemal na całym świecie się zatrzymał. Wyjątkiem jest Białoruś, gdzie nie tylko rozgrywane są wszystkie mecze, ale na trybunach regularnie pojawia się publiczność. Nie inaczej było podczas spotkania ligowego rozegranego w Mińsku.',
        link: 'https://sport.onet.pl/pilka-nozna/inne-ligi/koronawirus-liga-bialoruska-wciaz-nie-przerwala-rozgrywek/kgrcqjy'
    }]

});

export default (state = defaultState(), action: any): IExampleReducer => {
    switch(action.type){
        case('REMOVE_ITEM'):
        return{
            ...state,
            [action.payload.itemType]: [
                ...state[action.payload.itemType].filter(item =>item.id !== action.payload.id)
            ]
        }
        case('ADD_ITEM'):
        return{
            ...state,
            [action.payload.itemType]: [
                ...state[action.payload.itemType],
                action.payload.itemContent
            ]
        }
        default:
            return state;
    }
};