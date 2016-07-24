import {
  beforeEach,
  describe,
  expect,
  it,
  async,
  inject,
  beforeEachProviders,
  ComponentFixture,
  setBaseTestProviders,
  TestComponentBuilder
} from "@angular/core/testing";

import { provide } from "@angular/core";

import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from "@angular/platform-browser-dynamic/testing";

import { NgTruncateComponent } from "../../dist/components/truncate-characters.component";

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
                     TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

import { Component } from "@angular/core";

@Component({
  selector: "[my-example]",
  template: "<p [ng2Truncate]='description' lenght='7'></p>",
  directives: [NgTruncateComponent]
})
class TruncateExample {
  description = "This is a long text.";
}

@Component({
  selector: "[my-example]",
  template: "<p [ng2Truncate]='description' lenght='3' elipsis='xxx'><b>Other text</b></p>",
  directives: [NgTruncateComponent]
})
class TruncateExampleChangeElipsis {
  description = "123456789";
}

@Component({
  selector: "[my-example]",
  template: "<p [ng2Truncate]='description' [skipTitle]='true'></p>",
  directives: [NgTruncateComponent]
})
class TruncateExampleSkipTitle {
  description = "123456789";
}

describe("NgTruncateComponent", () => {
  let fixture: ComponentFixture<any>;
  let context: any;
  let element: any;

  beforeEachProviders(() => {return [NgTruncateComponent, TestComponentBuilder, TruncateExample]; });

  function createComponent(tcb: TestComponentBuilder, component: any, text: string): any {
    return tcb
      .createAsync(component)
      .then((f: ComponentFixture<any>) => {
        fixture = f;
        context = fixture.componentInstance;
        element = fixture.nativeElement;
        if (text)
          context.description = text;
        fixture.detectChanges();
      });
  }

  function asyncAssert(component: any, text: string, assertions: any) {
    return async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      createComponent(tcb, component, text).then(() => {
        try {
          assertions.call();
        } catch (error) {
          expect(true).toEqual(false, error.message);
        }
      });
    }));
  }

  it("not transform empty text", asyncAssert(TruncateExample, " ", () => {
    expect(element.querySelector("p span").innerText).toEqual("");
  }));

  it("transforms 'This is a long test.' to 'This is...'", asyncAssert(TruncateExample, null, () => {
    expect(element.querySelector("p span").innerText).toEqual("This is...");
  }));

  it("title attribute contains full text", asyncAssert(TruncateExample, null, () => {
    let el = element.querySelector("p span");
    expect(el.attributes["title"]).toEqual("This is a long text.");
  }));

  it("title can be skiped", asyncAssert(TruncateExampleSkipTitle, null, () => {
    let el = element.querySelector("p span");
    expect(el.attributes["title"]).toEqual(undefined);
  }));

  it("transforms '123456789' to '123xxx' to 'This is...'", asyncAssert(TruncateExampleChangeElipsis, null, () => {
    expect(element.querySelector("p span").innerText).toEqual("123xxx");
  }));

  it("not transform container content", asyncAssert(TruncateExampleChangeElipsis, null, () => {
    expect(element.querySelector("p span").innerText).toEqual("123xxx");
    expect(element.querySelector("p b").innerText).toEqual("Other text");
  }));
});
