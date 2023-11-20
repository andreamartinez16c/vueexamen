import Global from './../Global'
import axios from 'axios'

export default class ServiceCubos{
    getCubos() {
        return new Promise(function(resolve){
            var request= "/api/Cubos"
            var url= Global.apiCubos + request
            var cubos=[]
            axios.get(url).then(response=>{
                cubos= response.data
                resolve(cubos)
            })

        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            var request="/api/Cubos/Marcas"
            var url = Global.apiCubos + request
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }

    getCubosMarca(marca){
        return new Promise(function(resolve){
            var request= "api/cubos/cubosmarca/" + marca
            var url= Global.apiCubos + request
            axios.get(url).then(response=> {
                resolve(response.data)
            })
        })
    }

    getCuboId(idcubo){
        return new Promise(function(resolve){
            var request= "/api/Cubos/" + idcubo
            var url= Global.apiCubos + request
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }

    getComentariosCubo(idcubo){
        return new Promise(function(resolve){
            var request="/api/ComentariosCubo/GetComentariosCubo/" + idcubo
            var url= Global.apiCubos + request
            console.log(url)
            axios.get(url).then(response=> {
                resolve(response.data)
            })
        })
    }
}