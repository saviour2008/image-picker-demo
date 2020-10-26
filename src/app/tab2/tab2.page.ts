import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public imageList: Array<string> = [];
  constructor(private imagePicker: ImagePicker) { }

  getPicturesFromPhoto() {
    const options = {
      maximumImagesCount: 9,
      width: 200,
      height: 200,
      quality: 100,
      outputType: 1,       //设置为0是文件路径，1是base64，关于如何把base64转化为文件，请看下面的链接
    };
    this.imagePicker.getPictures(options).then((results) => {

      for (const res of results) {
        this.imageList.push(`data:image/jpeg;base64,${res}`);
        // this.blob = this.dataURLtoBlob("data:image/jpeg;base64," + res); //这里一定要加上data:image/jpeg;base64,
        // this.file = this.blobToFile(this.blob, 'a.png'); //这里一定要加上文件的名字，看你自己的后台设置
        // const param = new FormData();  //以表单的形式上传，这里一定要这样才能传过去
        // param.append('file', this.file, this.file.name);
        // alert(param);
        // this.sendChangeImg(param);
      }
      }, (err) => {

      });
  }

}
