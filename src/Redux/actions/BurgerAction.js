import { tang_giam } from './Type/BurgerType';

export const tangGiamAction = (food,bool) => {
    return{
        type:tang_giam,food,bool,
    }
}