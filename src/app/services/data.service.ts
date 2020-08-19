import { Injectable } from '@angular/core';
import {Video} from '../models/video.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataBase: Array<Video> = [{
    id: '1',
    name: 'Justin Bieber - Changes (Nature Visual)',
    author: 'Justin Bieber',
    url: '',
    view: 1000,
    like: 0,
    dislike: 0,
    details: 'Production Company: OBB Pictures'
  },

  {
    id: '2',
    name: 'TTCTSD.33 - Thầy Giáo Yoga Huỳnh Phương Và Cô Học Trò May Mắn Sĩ Thanh của Tuổi Trẻ Chưa Trải Sự Đời',
    author: 'Tuổi trẻ chưa trải sự đời',
    url: '',
    view: 999999,
    like: 0,
    dislike: 0,
    details: 'Huỳnh Phương lần đầu thể hiện đẳng cấp Yoga 15 năm của mình, khiến Sĩ Thanh kinh ngạc!'
  },
  {
    id: '3',
    name: 'TRUNG YONE | TÚ ƠI! HÃY ĐỂ ANH BA CHO TÚ THẤY BEST YONE của  Ba Rọi Béo',
    author: 'Ba rọi béo',
    url: '',
    view: 99999999999,
    like: 0,
    dislike: 0,
    details: 'Chúc mấy đứa có 1 buổi stream nhiều kiến thức hữu ích và xả nhiều stress sau 1 ngày mệt mỏi'
  },

  ];
  constructor() { }
}
