/**
 * Created by sunzhuoyi on 2017/12/3.
 */
/*
类理论*/
/*
class Task {
  id;
  //构造函数Task()
  Task(ID) {id = ID;}
  outputTask() { output(id); }
}
class XYZ inherits Task {
  label;
  //构造函数XYZ()
  XYZ(ID,Label) {super( ID );label = label;}
  outputTask() {super();output(label);}
}
*/

/*
行为委托*/

var Task = {
  setId:function (ID) {
    this.id = ID;
  },
  outputID:function () {
    console.log(this.id)
  }
};
//让XYZ委托Task
XYZ = Object.create(Task);


