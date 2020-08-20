import { Injectable } from '@angular/core';
import { Video } from '../models/video.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getItems(): any {
    throw new Error("Method not implemented.");
  }
  listOfVideo:Array<Video> = [
    {
      id: "string",
      name: "string",
      author: "string",
      url: "string",
      pictureURL:"string",
      view: 1,
      like: 1,
      dislike: 1,
      details: "string"
    },
    {
      id: "string",
      name: "string",
      author: "string",
      url: "string",
      pictureURL:"string",
      view: 1,
      like: 1,
      dislike: 1,
      details: "string"
    },
    {
      id: "string",
      name: "string",
      author: "string",
      url: "string",
      pictureURL:"string",
      view: 1,
      like: 1,
      dislike: 1,
      details: "string"
    }
  ]


  // dataBase: Array<Video> = [{
  //   id: '1',
  //   name: 'Justin Bieber - Changes (Nature Visual)',
  //   author: 'Justin Bieber',
  //   url: '',
  //   view: 7,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Production Company: OBB Pictures'
  // },

  // {
  //   id: '2',
  //   name: 'TTCTSD.33 - Thầy Giáo Yoga Huỳnh Phương Và Cô Học Trò May Mắn Sĩ Thanh của Tuổi Trẻ Chưa Trải Sự Đời',
  //   author: 'Tuổi trẻ chưa trải sự đời',
  //   url: '',
  //   view: 6,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Huỳnh Phương lần đầu thể hiện đẳng cấp Yoga 15 năm của mình, khiến Sĩ Thanh kinh ngạc!'
  // },
  // {
  //   id: '3',
  //   name: 'TRUNG YONE | TÚ ƠI! HÃY ĐỂ ANH BA CHO TÚ THẤY BEST YONE của  Ba Rọi Béo',
  //   author: 'Ba rọi béo',
  //   url: '',
  //   view: 5,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Chúc mấy đứa có 1 buổi stream nhiều kiến thức hữu ích và xả nhiều stress sau 1 ngày mệt mỏi'
  // },

  // {
  //   id: '4',
  //   name: 'Chuyện Bên Lề 75: Anh Bradley Ở Cali Qua Thăm Anh Đức',
  //   author: 'Tyler Ngô - Mê Xe Hơn Mấy Cô',
  //   url: '',
  //   view: 4,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Chiều thứ 7 mấy anh em tập trung ăn uống nhẹ nhàng như mọi lần'
  // },

  // {
  //   id: '5',
  //   name: ' Tin tức Covid-19 mới nhất | Tình hình dịch corona hôm nay 19/8 | Dịch covid hôm nay tại Việt Nam của TIN TỨC 24H ONLINE',
  //   author: 'TIN TỨC 24H ONLINE',
  //   url: '',
  //   view: 3.992,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Theo công điện, hiện thành phố Hà Nội đã có tổng số 35 ca mắc COVID-19, trong đó có 11 ca mắc ngoài cộng đồng và 2 ca mắc thứ phát, có ca không có triệu chứng khi phát hiện đã qua 14 ngày'
  // },
  // {
  //   id: '6',
  //   name: ' MixiVLOG#17: Nhà mới, cuộc sống mới của gia đình Độ Mixi',
  //   author: 'MixiGaming',
  //   url: '',
  //   view: 3.635,
  //   like: 0,
  //   dislike: 0,
  //   details: ' Chúc các bạn xem stream vui vẻ'
  // },
  // {
  //   id: '7',
  //   name: ' MixiVLOG#17: Nhà mới, cuộc sống mới của gia đình Độ MixiDẫn BÌNH GOLD đi "Lái Máy Bay" & GIVEAWAY Độc  Nhất cho Fan nhaTO ở BAR LỚN NHẤT TP. Vinh',
  //   author: 'nhaTO Official',
  //   url: '',
  //   view: 3.362,
  //   like: 0,
  //   dislike: 0,
  //   details: ' Chúc các bạn xem  vui vẻ'
  // },
  // {
  //   id: '8',
  //   name: ' MISSING YOU - PHƯƠNG LY x TINLE (Official MV)',
  //   author: 'Phuong Ly Official',
  //   url: '',
  //   view: 9999992,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Dễ thương nhất trên đời'
  // },

  // {
  //   id: '9',
  //   name: 'NHISM PHÁ ĐẢO FALL GUYS VÀ TÂM SỰ VỀ CÂU CHUYỆN ĐƯỢC BỐ MẸ NHẶT VỀ NUÔI Ở BÃI RÁC',
  //   author: ' NHISM FALL GUYS',
  //   url: '',
  //   view: 92,
  //   like: 0,
  //   dislike: 0,
  //   details: 'nhims and các bạn'
  // },

  // {
  //   id: '10',
  //   name: '3 ĐIỀU ĐỨC DẠY BẢO [REP B RAY] - CHOI ',
  //   author: '  LOCOBoiz Official',
  //   url: '',
  //   view: 1,
  //   like: 0,
  //   dislike: 0,
  //   details: 'locoboiz on the mic'
  // },

  // {
  //   id: '11',
  //   name: 'CHUBBY REACTION GIÁO ÁN TRỐN VỢ REVIEW GÁI CỦA SENA ',
  //   author: '  Sena',
  //   url: '',
  //   view: 1,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Vào lớp với thầy hiệu trưởng:'
  // },

  // {
  //   id: '12',
  //   name: 'THẦY BA KHUYÊN MỌI NGƯỜI KHÔNG NÊN XEM...HẠI MẮT LẮM ',
  //   author: '   Ba Rọi Béo',
  //   url: '',
  //   view: 65,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Chúc mấy đứa có 1 buổi stream nhiều kiến thức hữu ích và xả nhiều stress sau 1 ngày mệt mỏi:'
  // },

  // {
  //   id: '13',
  //   name: 'BabyRed Livestream part 4 Lớp học',
  //   author: '   BabyRed',
  //   url: '',
  //   view: 9,
  //   like: 0,
  //   dislike: 0,
  //   details: 'Đến với lớp giang hồ trực tuyến nào'
  // },

  // {
  //   id: '14',
  //   name: 'Nasus.exe',
  //   author: ' Mako ',
  //   url: '',
  //   view: 23,
  //   like: 0,
  //   dislike: 0,
  //   details: 'How 2 Nasus: Q Like, share và subscribe cho mình nhé ^^',
  // },

  // {
  //   id: '15',
  //   name: 'QUAN HỆ RỘNG - BÌNH GOLD OFFICIAL MP3',
  //   author: ' Mako ',
  //   url: '',
  //   view: 23,
  //   like: 0,
  //   dislike: 0,
  //   details: 'How 2 Nasus: Q Like, share và subscribe cho mình nhé ^^',
  // },

  // ];
  constructor() { }
}
