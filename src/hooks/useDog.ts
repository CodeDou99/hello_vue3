import axios from 'axios'
import { reactive, ref } from 'vue';



export default function () {

    let sum = ref(0)
    let dogList = reactive(['https://images.dog.ceo/breeds/borzoi/n02090622_5211.jpg'])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            // console.log(result.data.message );
            dogList.push(result.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    return {dogList,getDog}
}