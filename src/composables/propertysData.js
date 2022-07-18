/*onst getPropertys = () => {
    // const propertys = ref([])
    // const error = ref(null)


    const load = async () => {
        try {
            let data = await fetch("http://lemus.gleam.mx/api/w/estates")
            if (!data.ok) {
                throw Error("no data")
            }
            propertys = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value);
        }


        return propertys
    }

}*/



export function getPropertys() {
    const propertys = []

    fetch("http://lemus.gleam.mx/api/w/estates")
        .then((res) => (setTimeout(() => {
            propertys = res.data.payload;


        }, 300)))
        .catch((error) => (console.log(error)))
    return


}


// import { fetchPropiedades } from "@/composables/propertiesDataFetch.js";


// const req = await fetchPropiedades();

// console.log(req.payload);