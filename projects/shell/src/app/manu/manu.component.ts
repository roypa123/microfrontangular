import { Component, OnInit, ViewContainerRef, Injector } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {


  constructor(private vcr: ViewContainerRef, private injector: Injector) { }

  async ngOnInit() {
    await this.loadMfe1();
    await this.loadMfe2();

  }

  async loadMfe1() {
    const mfe1Module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Module'
    });

    const mfe1Component = mfe1Module.Mfe1Component; // Adjust if needed
    this.vcr.createComponent(mfe1Component, { injector: this.injector });
  }

  async loadMfe2() {
    const mfe2Module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe2',
      exposedModule: './Module'
    });

    const mfe2Component = mfe2Module.Mfe2Component; // Adjust if needed
    this.vcr.createComponent(mfe2Component, { injector: this.injector });
  }

}
