import { Passport } from "passport"
import { BearerStrategy, IBearerStrategyOptionWithRequest } from "passport-azure-ad"

const PassportConfig = new Passport()

class Auth {    

    constructor() {
        const clientID = "1b2d1eed-2161-4982-a578-d4cf289a8f9e"
        const b2cDomainHost = "allfitTenant.b2clogin.com"
        const tenant = "allfitTenant.onmicrosoft.com"
        const policyName = "B2C_1_signupsigninallfit"
        const options :  IBearerStrategyOptionWithRequest= {
            identityMetadata: "https://" + b2cDomainHost + "/" + tenant + "/" + policyName + "/v2.0/.well-known/openid-configuration/",
            clientID: clientID,
            policyName: policyName,
            isB2C: true,
            validateIssuer: false,
            loggingLevel: "info",
            loggingNoPII: false,
            passReqToCallback: true,
            audience: [
                "1b2d1eed-2161-4982-a578-d4cf289a8f9e",
                "567d7957-d4aa-4f45-a70f-fed9cbb45ec8",
                "b8c8bff2-8448-4907-ba11-7e65c462da48"
            ]         
        }

        const authenticationStrategy = new BearerStrategy(options, (req, token, done) => {
            console.log(token)
            return done(null, {}, token)
        })

        PassportConfig.use(authenticationStrategy)
    }      

    public Passport() {
        return PassportConfig
    }
}
export { Auth }