import { PlatformAccessory, CharacteristicGetCallback } from 'homebridge';
import { ExampleHomebridgePlatform } from './platform';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class ExamplePlatformAccessory {
    private readonly platform;
    private readonly accessory;
    ip: string;
    password: string;
    raum: string;
    person: string;
    username: string;
    private service;
    /**
     * These are just used to create a working example
     * You should implement your own code to track the state of your accessory
     */
    private exampleStates;
    constructor(platform: ExampleHomebridgePlatform, accessory: PlatformAccessory, ip: string, password: string, raum: string, person: string, username: string);
    handleMotionDetectedGet(callback: any): void;
    /**
     * Handle the "GET" requests from HomeKit
     * These are sent when HomeKit wants to know the current state of the accessory, for example, checking if a Light bulb is on.
     *
     * GET requests should return as fast as possbile. A long delay here will result in
     * HomeKit being unresponsive and a bad user experience in general.
     *
     * If your device takes time to respond you should update the status of your device
     * asynchronously instead using the `updateCharacteristic` method instead.
  
     * @example
     * this.service.updateCharacteristic(this.platform.Characteristic.On, true)
     */
    getOn(callback: CharacteristicGetCallback): void;
}
//# sourceMappingURL=platformAccessory.d.ts.map