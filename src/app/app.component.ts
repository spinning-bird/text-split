import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'text_snip';
  charCount: string = 'asd';
  inputText: string = 'aah';
  chunkLength: string = '500';
  chunks: string[] = [];

  onTextChange(event: any) {}

  constructor(private clipBoard: Clipboard) {}

  onSplitText() {
    const chunkInt: number = Number.parseInt(this.chunkLength);
    let remainingText: string = this.inputText;
    let words: string[] = this.inputText.split(' ');
    let currentChunk: string = '';
    let index: number = 0;
    this.chunks = [];

    while (remainingText.length > chunkInt - 10) {
      index = chunkInt - 10;
      while (remainingText[index] !== ' ' && index > 0) {
        index--;
      }
      this.chunks.push(remainingText.substring(0, index));
      remainingText = remainingText.substring(index + 1);
    }

    this.chunks.push(remainingText);

    for (let i = 0; i < this.chunks.length; i++) {
      this.chunks[i] = this.chunks[i] + `\n\n[${i + 1}/${this.chunks.length}]`;
    }

    console.log('done.');
  }

  onCopy(text: string) {
    // copies the text to the clipboard
    this.clipBoard.copy(text);
  }
}

/*

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Eu lobortis elementum nibh tellus molestie nunc non. Mattis rhoncus urna neque viverra. Commodo sed egestas egestas fringilla phasellus. Posuere lorem ipsum dolor sit. Sed libero enim sed faucibus turpis in eu mi bibendum. Dui sapien eget mi proin sed libero enim sed faucibus. Sit amet dictum sit amet justo. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Volutpat blandit aliquam etiam erat velit. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Sed augue lacus viverra vitae congue eu consequat ac.

Facilisis leo vel fringilla est ullamcorper eget. Lorem dolor sed viverra ipsum nunc aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Diam phasellus vestibulum lorem sed risus ultricies tristique. Lacinia quis vel eros donec ac odio tempor orci. Ac turpis egestas sed tempus urna. Leo vel orci porta non pulvinar. Sagittis id consectetur purus ut. Tellus orci ac auctor augue mauris augue. Integer vitae justo eget magna fermentum.

Lectus proin nibh nisl condimentum id venenatis a. Ut morbi tincidunt augue interdum velit euismod. Nisl pretium fusce id velit ut tortor. Tincidunt dui ut ornare lectus sit amet. Viverra vitae congue eu consequat ac. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Fringilla urna porttitor rhoncus dolor purus non. Sagittis vitae et leo duis ut. Lacus viverra vitae congue eu consequat. Consectetur lorem donec massa sapien faucibus. Et tortor at risus viverra adipiscing. Velit egestas dui id ornare. Porta non pulvinar neque laoreet suspendisse interdum. Amet dictum sit amet justo donec enim diam. Quam pellentesque nec nam aliquam sem et tortor.

*/
