import { Profile } from './profile';
export class ProfileService {
    cities: string[];
       private profiles: Profile[] = [
           new Profile('Default Profile', '[Banglore,Mumbai,Delhi]')
       ];
       saveNewProfile(cities: string[]) {
         const profileName = 'Profile' + this.profiles.length;
         const profile = new Profile(profileName, '[cities]') ;
         this.profiles.push(profile);
       }
       getProfiles() {
           return this.profiles;
       }
       deleteProile(profile: Profile) {
           this.profiles.splice(this.profiles.indexOf(profile), 1);
       }
}
