import * as Funcao from "./funcao.mjs";

let membros = new Map();

membros.set("João","user");
membros.set("Maria","user");
membros.set("Carlos","admin");
membros.set("Márcia","admin");

Funcao.getAdmins(membros);
