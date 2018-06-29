@JavaProxy('com.tns.BroadcastReceiver.CallListener')
export class CallListener extends android.content.BroadcastReceiver {

  public onReceive(context: android.content.Context, intent: android.content.Intent) {
    console.log('==============', intent.getAction());
  }
}