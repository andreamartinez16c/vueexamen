import Global from "./../Global";
import axios from "axios";

export default class ServiceSeguridad {
  getToken(user) {
    return new Promise((resolve) => {
      var request = "/api/manage/login";
      var url = Global.apiCubos + request;
      axios.post(url, user).then((response) => {
        resolve(response.data.response);
      });
    });
  }

  getPerfil(token) {
    return new Promise(function (resolve) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      var request = "/api/manage/perfilusuario";
      var url = Global.apiCubos + request;
      console.log(url)
      axios.get(url, headers).then((response) => {
        resolve(response.data);
      });
    });
  }

  getCompras(token) {
    return new Promise(function (resolve) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      var request = "/api/compra/comprasusuario";
      var url = Global.apiCubos + request;
      axios.get(url, headers).then((response) => {
        resolve(response.data);
      });
    });
  }

  insertCompra(idcubo, compra, token) {
    return new Promise((resolve) => {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      var request = "/api/compra/insertarpedido/" + idcubo;
      var url = Global.apiCubos + request;
      axios.post(url, compra, headers).then((response) => {
        resolve(response.data);
      });
    });
  }

  insertUsuario(usuario){
    return new Promise((resolve) => {
        var request = "/api/Manage/RegistroUsuario";
        var url = Global.apiCubos + request;
        axios.post(url, usuario).then((response) => {
          resolve(response.data);
        });
      });
  }
}


