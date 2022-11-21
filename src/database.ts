import { connect } from "mongoose";

class MongoDB {
   private databaseMongoName: string = '';
  constructor(private nameDb: string, private dataBaseUrl: string) {}
  async conectDataBase() {
    try {
      const db = await connect(this.dataBaseUrl);
      this.databaseMongoName=db.connection.name;
      console.log("Conectado a la bd", this.databaseMongoName);
    } catch (error: any) {
      console.log("-Error-".repeat(10));
      console.log(error.message);
    }
  }
  get databasename() {
    return this.nameDb;
  }
  set nameDataBase(name: string) {
    this.nameDb = name;
  }
  get mongoDataBaseName (){
    return this.databaseMongoName;
  }
}
export default MongoDB;
