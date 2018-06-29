"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallListener = /** @class */ (function (_super) {
    __extends(CallListener, _super);
    function CallListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallListener.prototype.onReceive = function (context, intent) {
        console.log('==============', intent.getAction());
    };
    CallListener = __decorate([
        JavaProxy('com.tns.BroadcastReceiver.CallListener')
    ], CallListener);
    return CallListener;
}(android.content.BroadcastReceiver));
exports.CallListener = CallListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsbExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FsbExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFBa0MsZ0NBQWlDO0lBQW5FOztJQUtBLENBQUM7SUFIUSxnQ0FBUyxHQUFoQixVQUFpQixPQUFnQyxFQUFFLE1BQThCO1FBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUpVLFlBQVk7UUFEeEIsU0FBUyxDQUFDLHdDQUF3QyxDQUFDO09BQ3ZDLFlBQVksQ0FLeEI7SUFBRCxtQkFBQztDQUFBLEFBTEQsQ0FBa0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FLbEU7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIkBKYXZhUHJveHkoJ2NvbS50bnMuQnJvYWRjYXN0UmVjZWl2ZXIuQ2FsbExpc3RlbmVyJylcclxuZXhwb3J0IGNsYXNzIENhbGxMaXN0ZW5lciBleHRlbmRzIGFuZHJvaWQuY29udGVudC5Ccm9hZGNhc3RSZWNlaXZlciB7XHJcblxyXG4gIHB1YmxpYyBvblJlY2VpdmUoY29udGV4dDogYW5kcm9pZC5jb250ZW50LkNvbnRleHQsIGludGVudDogYW5kcm9pZC5jb250ZW50LkludGVudCkge1xyXG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09JywgaW50ZW50LmdldEFjdGlvbigpKTtcclxuICB9XHJcbn0iXX0=