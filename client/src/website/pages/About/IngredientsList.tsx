/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'


const IngredientsList = () => {

    const IngredientsListData = [
        {
            title: "Boba:",
            describe: "Tapioca starch, water, sodium carboxymethyl cellulose (cmc), caramel flavor, potassium sorbate & sodium benzoate (preservatives).",
            Contains: ""
        },
        {
            title: "Classic Black Milk Tea Powder:",
            describe: "Sugar, Dextrose, Instant Black Tea, Coconut Oil, Corn Syrup Solids, Sodium Caseinate (A Milk Derivative), Natural and Artificial Flavor, Dipotassium Phosphate, Silicon Dioxide, Propylene Glycol Esters of Fatty Acids, Mono & Diglycerides, Salt, Soy Lecithin, Carrageenan, Xanthan Gum, Artificial Color.",
            Contains: "Contains: Milk, Soy"
        },
        {
            title: "Earl Grey Milk Tea Powder:",
            describe: "Sugar, Dextrose, Instant Black Tea, Coconut Oil, Corn Syrup Solids, Sodium Caseinate (A Milk Derivative), Natural & Artificial Flavor, Dipotassium Phosphate, Silicon Dioxide, Propylene Glycol Esters of Fatty Acids, Mono & Diglycerides, Salt, Soy Lecithin, Carrageenan, Xanthan Gum, FD&C Yellow 5&6.",
            Contains: "Contains: Milk, Soy"
        },
        {
            title: "Matcha Green Milk Tea Powder:",
            describe: "Sugar, Corn Syrup Solids, Japanese Matcha Green Tea, Dextrose, Coconut Oil, Contains 2% Or Less of: Salt, Sodium Caseinate, Phosphate (Potassium, Sodium), Guar Gum, Soy Lecithin, Mono & Diglycerides, Xanthan Gum, Artificial Flavor, Color (Yellow 5, Yellow 6).",
            Contains: "Contains: Milk, Soy"
        },
        {
            title: "Taro Root Milk Tea Powder:",
            describe: "Sugar, Non-Dairy Creamer, [Coconut Oil, Corn Syrup Solids, Sodium Caseinate (A Milk Derivative), Sugar, Dipotassium Phosphate, Silicon Dioxide, Propylene Glycol Esters of Fatty Acids, Mono & Diglycerides, Salt, Soy Lecithin, Carrageenan, Artificial Flavor and Color], Dry Milk, Instant Black Tea, Salt, Taro Flavor, FD&C Red 3&40, FD&C Blue 1.",
            Contains: "Contains: Milk, Soy"
        },
        {
            title: "Yogurt Powder Mix:",
            describe: "Sugar, Nonfat Dry Milk, Dextrose, Citric Acid, Less Than 2% Of Each Of The Following: Nonfat Yogurt Powder (Skim Milk, Culture), Guar Gum, Maltodextrin, Modified Food Starch, Propylene Glycol Ester, Lactoglyceride, Mono & Diglyceride, Natural Flavor.",
            Contains: "Contains: Milk"
        },
        {
            title: "Milk Tea Base:",
            describe: "Sugar, Non-Dairy Creamer, [Coconut Oil, Corn Syrup Solids, Sodium Caseinate (A Milk Derivative), Sugar, Dipotassium Phosphate, Silicon Dioxide, Propylene Glycol Esters of Fatty Acids, Mono & Diglycerides, Salt, Soy Lecithin, Carrageenan, Artificial Flavor and Color], Dry Milk, Instant Black Tea, Salt.",
            Contains: "Contains: Milk, Soy"
        },
    ]
    return (
        <div tw=" max-w-5xl px-8 py-24 mx-auto my-0 space-y-10 " >
            <h1 tw=" text-center mb-10 text-5xl font-bold" >Ingredients List</h1>


            {
                IngredientsListData.map(data => (
                    <div tw="text-3xl space-y-6" >
                    <p tw="font-bold underline" >{data.title}</p>
                    <p tw="leading-relaxed"> {data.describe}</p>
                    <p tw=""> {data.Contains}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default IngredientsList
