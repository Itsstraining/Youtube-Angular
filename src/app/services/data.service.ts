import { Injectable } from '@angular/core';
import { Video } from '../models/video.model'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getItems(): any {
    throw new Error("Method not implemented.");
  }
 
  listOfVideo:Array<Video> = [
    {
      id: "1",
      type:"Music",
      name: "THƯƠNG THẦM | RICKY STAR - KHOA | MV OFFICIAL ",
      author: "KHOA OFFICIAL",
      url: "https://www.youtube.com/embed/wHK9bHf_nEY",
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJyxUpodO4N2Hb1QylUig0lhZqgideaoUMPnDISIxA=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/wHK9bHf_nEY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCyWRw7cS9RzTHej9_jJZdBwXdl8w",
      view: 1,
      like: 1,
      dislike: 1,
      details: "78.417 lượt xem"
    },
   
    {
      id: "2",
      type:"News",
      name: "Chuyện Bên Lề 76: Anh Em Đi Dayton Đá Giải ",
      author: "Tyler Ngô - Mê Xe Hơn Mấy Cô",
      url: "https://www.youtube.com/embed/1rnmr3SjmIE",
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gg18zd2--TrIwyjcCh5vmZP1Qq5mVrIhLrCJw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/1rnmr3SjmIE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLATlma8Hluo3CEOPQHUaHMKNkWLCw",
      view: 1,
      like: 1,
      dislike: 1,
      details: "49.417 lượt xem "
    },
    {
      id: "3",
      type:"Game",
      name: "TRUNG TALON | SÁT THỦ KHÉT TIẾNG THẦY GIÁO BA ",
      author: "Ba Rọi Béo",
      url: "https://www.youtube.com/embed/5Ere_38nZbY",
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/5Ere_38nZbY/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxG9m7lI2keD0WqjbR2o9lK6oKiA",
      view: 1,
      like: 1,
      dislike: 1,
      details: "9 lượt xem "
    },
    {
      id: "4",
      type:"Music",
      name: "3 ĐIỀU ĐỨC DẠY BẢO [REP B RAY] - CHOI ",
      author: "LOCOBoiz Official",
      url: "https://www.youtube.com/embed/cmKvNPlRH6U",
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gg3nq-bDujEhOHvAk8m6yqeVcbodhtzymr4Yw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/cmKvNPlRH6U/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHncy7pqB99vhO9nOqmeDXPz5yEg",
      view: 1,
      like: 1,
      dislike: 1,
      details: "99 lượt xem "
    },
    {
      id: "5",
      type:"Music",
      name: "QUAN HỆ RỘNG - BÌNH GOLD OFFICIAL MP3 ",
      author: "Bình gold",
      url: "https://www.youtube.com/embed/goQUV0jW8b4",
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gir3Gk8iElChTeygkniVjA82AzmuvIBENa5rA=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/goQUV0jW8b4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxrolSXT7umKaajPTKEh_PjXDpkg",
      view: 1,
      like: 1,
      dislike: 1,
      details: "99.999 lượt xem "
    },
    {
      id: '6',
      type:"Movies",
      name: 'TTCTSD.33 - Thầy Giáo Yoga Huỳnh Phương Và Cô Học Trò May Mắn Sĩ Thanh của Tuổi Trẻ Chưa Trải Sự Đời',
      author: 'Tuổi trẻ chưa trải sự đời',
      url: 'https://www.youtube.com/embed/Bn0RfBPavFg',
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJy24ii2sCAjheSqMC9tjtXNevfCSv1irCzRQ5MW=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/Bn0RfBPavFg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAtdgLi5TWitanQwko40Z6_XQMICg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '50.000 lượt xem'
    },
    
    {
      id: '7',
      type:"News",
      name: 'Hành Trình Phiền Những Người Bạn Tập 12: Ghé Nhà Anh Vinh Review Sương Sương Chiếc Range Rover ',
      author: 'Tyler Ngô - Mê Xe Hơn Mấy Cô',
      url: 'https://www.youtube.com/embed/tuT_YvD27pU',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gg18zd2--TrIwyjcCh5vmZP1Qq5mVrIhLrCJw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/tuT_YvD27pU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCePXzRRrydOl2l-NhMYa2wCSW3Ug",
      view: 6,
      like: 0,
      dislike: 0,
      details: '294.375 lượt xem'
    },

    {
      id: '8',
      type:"Game",
      name: 'Sena Vlog - Build dàn PC xịn xò gần 100 triệu ',
      author: 'Sena',
      url: 'https://www.youtube.com/embed/NqQjnEKsw_o',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GgUuzrsCY5op6hjiKg2VNxMvoPT8uJGcxSuVw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NqQjnEKsw_o/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLByTaF1thE5pNvfrz_FzJwz2gKnIg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },

    {
      id: '9',
      type:"Music",
      name: 'TEST NHẠC PIPO NGHE EO ÉO | LÊ BẢO ',
      author: 'Lê Bảo Official',
      url: 'https://www.youtube.com/embed/NLb1sDiNQSI',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjvpLWoM2X3rPvy0uIYG6WhI2oe-jGpuEsaaA=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NLb1sDiNQSI/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD5lF-k06EZdxma3-v19HICn3DFJA",
      view: 6,
      like: 0,
      dislike: 0,
      details: '10 N lượt xem'
    },
    {
      id: '10',
      type:"Music",
      name: 'BỐ GIÀ REMIX | CON TRAI CHÚ, ẢNH NGON LẮM! | TRẤN THÀNH FT. TRÚC NHÂN ',
      author: 'TRẤN THÀNH TOWN',
      url: 'https://www.youtube.com/embed/BNOrbeXMbrQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GigxX33RGLAWAa6TlxZdxTE_-yBwdxjMm35Gg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/BNOrbeXMbrQ/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB7uVzxGvOnOZAuEbEbGsQjsaTUNQ",
      view: 6,
      like: 0,
      dislike: 0,
      details: '4.057.993 lượt xem lượt xem'
    },
    {
      id: '11',
      type:"News",
      name: '(Talkshow) Ra mắt mẫu áo Mixigaming mới siêu chất, Mixigaming reaction Xạ Thủ Đua Tài ',
      author: 'MixiGaming',
      url: 'https://www.youtube.com/embed/w5lbpH5S-wA',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjjSkfEtGkyqFF79Y5aSoY1H8DAV0CunbWFkw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/w5lbpH5S-wA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAY85P5g6UA0Ywq9yMKgVHxJjw6Cw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '36.981 lượt xem'
    },
    {
      id: '12',
      type:"Game",
      name: 'TRUNG RIVEN | PERFECT ',
      author: 'Ba rọi béo',
      url: 'https://www.youtube.com/embed/2ccpqCeeJSI',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/2ccpqCeeJSI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAl2JRBQErbdO6HnQHPcwx7lqT8Cg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },
    {
      id: '13',
      type:"Game",
      name: 'THẦY BA QUẨY CỰC NHIỆT VỚI FALL GUYS ',
      author: 'Ba Rọi Béo',
      url: 'https://www.youtube.com/embed/VY0dPdBU7Ks',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/VY0dPdBU7Ks/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBckCdtQHW9ACuhu26pwW4JPq1Paw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '99 N lượt xem'
    },
    {
      id: '14',
      type:"Movies",
      name: 'LÁI XE CỰC KHÉT | LÊ BẢO Official ',
      author: 'LÊ BẢO Official',
      url: 'https://www.youtube.com/embed/zD1ti54YGbU',
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJwdh00dBAqYha5S6wpXNw9RAkaw9VWK7HcSgMt2=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/mMROn2S2QGM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB5CrXzi1um88eHv45ZWfgYAuuUmg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },
    {
      id: '15',
      type:"News",
      name: 'Cập nhật tình hình dịch COVID-19 ngày 19/8: Việt Nam có 100 ca âm tính từ 1-3 lần với SARS-CoV-2  ',
      author: 'Alo News',
      url: 'https://www.youtube.com/embed/T4T6aQh00Uo',
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJzXjfN-RytRbMJFCXYtSTfFKCugrLXHE82Dzvw5=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/1nypVbesGD4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCPp_n5e-5JSnEDy6yUMsPK6tyDGg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '49.417 lượt xem'
    },
    {
      id: '16',
      type:"News",
      name: 'TTCTSD.12 - Anh Em Faptv Tổ Chức Sinh Nhật Bất Ngờ Cho Anh Long Đẹp Trai ',
      author: 'Tuổi Trẻ Chưa Trải Sự Đời',
      url: 'https://www.youtube.com/embed/7CT9YzOvMqQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GhEkImPnKaDkN15nJ66wM5JktBwi_jxvN5SkQ=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/7CT9YzOvMqQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHd5FdT-3iwTRFnLHlVA0K3HRbaA",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },

    {
      id: '17',
      type:"News",
      name: 'Modified Cars & Supercars Leaving a Car Show! - C63s CRASH, 800HP Supra, Aventador SVJ, Skyline,...  6.404.148 lượt xem ',
      author: 'DutchMotorsport',
      url: 'https://www.youtube.com/embed/z5dTorypxaQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gi0sRf67XWdvQb73L_-B0Fn3j2QGWAI5nMl8Q=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/z5dTorypxaQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAuRO28-UXKT_7fjEOm6H9dbRa8Dw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '6.404.148 lượt xem'
    },

    {
      id: '18',
      type:"Movies",
      name: 'BLVCKVINES 56:  How to trốn trả bài :) ',
      author: 'Blvck vines Official',
      url: 'https://www.youtube.com/embed/GsWI8PckfOw',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Ghke5PfJqd3mp1Ik6qHuLAH4_jPOru4eR5C5g=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/GsWI8PckfOw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAfhkseDRh1PgOUqkMlLqvjw6KW8A",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },

    {
      id: '19',
      type:"News",
      name: 'LAMBORGHINI Huracan EVO Spyder *LOUD* POV Test Drive by AutoTopNL ',
      author: 'AutoTopNL',
      url: 'https://www.youtube.com/embed/wt5O8CzQ3DA',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GimXwHtULABnGJSrSnuyUebN1HR0Gja_ig9Iw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/ILm3d00W9KI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBX0OGcxVi9RcJUX5464StOrEaJMQ",
      view: 6,
      like: 0,
      dislike: 0,
      details: '3.989.198 lượt xem'
    },

    {
      id: '20',
      type:"Game",
      name: 'Sena Vlog - Build dàn PC xịn xò gần 100 triệu ',
      author: 'Sena',
      url: 'https://www.youtube.com/embed/NqQjnEKsw_o',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GgUuzrsCY5op6hjiKg2VNxMvoPT8uJGcxSuVw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NqQjnEKsw_o/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLByTaF1thE5pNvfrz_FzJwz2gKnIg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem'
    },
    {
      id: '21',
      type:"Game",
      name: 'TRUNG REACTION | TOP 7 Streamer VN xinh đẹp tài năng nhưng lận đận tình duyên: ViruSs, Misthy...',
      author: 'Ba rọi béo',
      url: 'https://www.youtube.com/embed/FCH7NPyB3xg',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/FCH7NPyB3xg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBSCG-d80eK3_aluz6kozBpOPrBNw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181.989 N lượt xem'
    },
  ]
  getFile(){
    return of(this.listOfVideo);
   }


  constructor() { }
}
