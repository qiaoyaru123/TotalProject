
import request from "../utils/index";

export let Login = (params: object) => {
    console.log(params)
    return request.get("/topic/list");
 };
  