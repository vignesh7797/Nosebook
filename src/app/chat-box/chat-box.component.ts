import { Component, NgModule, OnInit, Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef, ViewChildren, QueryList, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faPaperPlane, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { MessageService } from '../message.service';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';
import { Contact } from '../contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { FooterComponent } from '../footer/footer.component'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})

export class ChatBoxComponent implements OnInit{
  url: any;
  reader: any;
  
  static Onback(): any {
    throw new Error('Method not implemented.');
  }

  contact: Contact = new Contact();

  //Icons
  smile = faSmileBeam;
  send_icon= faPaperPlane;
  paper_clip = faPaperclip;

  //Emoji
  showEmojiPicker = false;
  selectedEmoji: any;


  hide:boolean = true;
  message:String;
  image:any;
  msgAry:any[] =[];
  time_ago:Date;
  timeAry =[];
  time:Date;
  ImgData: File = null;
  previewUrl:any = null;
  imgPlace:any;

  send_time = new Date();
  hours = this.send_time.getHours();
  minutes = this.send_time.getMinutes();
  seconds = '0';

  tab:String;
 

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
    private messageService: MessageService,
    private titleService: Title,
    private sharedService: SharedService
  ) {
    
   }

   @ViewChild('msg', {static: false})  myScroll: ElementRef;
   @ViewChildren('msgitem') itemElement: QueryList<any>;

   private scrollContainer: any;
   private items =[];

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      const user_name = params.user_name;
      this.contactService.getContact(user_name).subscribe(
        contact =>{
           if(contact == undefined){
             this.router.navigateByUrl('');
           return;
           }
          this.contact = contact;
        }
      )
    });
    
    if (((this.message != "" && this.message != " ") || (this.selectedEmoji != '' && this.selectedEmoji != null) || this.image != null)) {
      this.hide != this.hide;
    }

    (this.image != null && this.image != '')  ? this.imgPlace = this.image : this.imgPlace ='Write something to Your Friend.!';

    
  }

  
    

  ngAfterViewInit(){
    this.scrollContainer = this.myScroll.nativeElement;
    this.itemElement.changes.subscribe(_ => this.onItemElementsChanged());

    setInterval(() =>{
      this.items.push({});
    }, 1000);

  }


  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left:0,
      behavior: 'smooth'
    })
  }



  getMessageData(e: Event){
    this.message = (<HTMLInputElement>e.target).value;
     ((this.message != '') && (this.message != null) ) ? this.hide = false : this.hide = true;
     
    }

  


  Onsend(){

    console.log("Image: " + this.image);

    if(((this.message !='') && (this.message != null)) || (this.previewUrl != null)) {
      this.msgAry.push({
        send_msg:this.message,
        send_img:this.previewUrl,
        send_time:Date()
      });
      this.message = null;
      this.previewUrl = null;
    }

    this.hide = true;
    console.log(this.msgAry);
    

    this.msgAry;

    this.imgPlace='Write something to Your Friend.!';

   }


   Onback(){
     this.tab = "tab2";
     return this.tab;
   }
   
   toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  select(event) {
    console.log(event);
    this.selectedEmoji = event.emoji;
  }

  hideEmoji(){
    this.showEmojiPicker = false;
  }

  addEmoji(event) {
     const {message} = this;
     const text = `${event.emoji.native}`;
     this.message =text;
     this.showEmojiPicker = false;
     if((this.message != '') && (this.message != null))
     {
       this.hide = false;
     }

    }

    fileProgress(fileInput: any) {
      this.ImgData = <File>fileInput.target.files[0];

      (this.image != null)  ? this.hide = false : this.hide = true;

      (this.image != null && this.image != '')  ? this.imgPlace = this.image : this.imgPlace ='Write something to Your Friend.!';

      

      this.preview();

     // this.Onsend();
    }

    preview() {
      // Show preview 
        var mimeType = this.ImgData.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }

        var reader = new FileReader();      
        reader.readAsDataURL(this.ImgData); 
        reader.onload = (_event) => { 
          this.previewUrl = reader.result; 
        }

        
      }

  
}
