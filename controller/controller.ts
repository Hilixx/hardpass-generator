import express, { Request, Response } from 'express';


module.exports = class controller{


    static passCrip(req:Request,res:Response){
        const pass:string = req.body.password
        const cripLevel:number = req.body.criptoLevel
        
        console.log(pass,cripLevel)
        
        
        
        function randomPass1(password: string): string {
            
            let array = password.split('');
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array.join('');
          }


          
        function randomPass2(password: string): string {
            let pass2:string = randomPass1(password)
            let pass2Split:string[] = pass2.split('')   
            pass2Split.forEach(function(item:string,index){
                let randomNumber = Math.floor(Math.random()*10)
                pass2Split[index] = item + randomNumber

            })

            return pass2Split.join('')
            
            
          }


        function randomPass3(password: string){
            let pass3:string = randomPass2(password)
            let randomNumber = Math.floor(Math.random()*3)
            console.log(randomNumber)


            if(randomNumber == 0){
              return randomPass3(password)
            }
            if(randomNumber == 1){
                let pass3Split:string[] = pass3.split('')
                pass3Split.push(')!@')
                pass3Split.unshift('@!(')
                return pass3Split.join('')
            }
            if(randomNumber == 2){
                let pass3Split:string[] = pass3.split('')
                pass3Split.unshift('!!bilbo')
                pass3Split.push('baggins!!')
                return pass3Split.join('')
            }
            if(randomNumber == 3){
                let pass3Split:string[] = pass3.split('')
                pass3Split.push('!@!@!')
                pass3Split.unshift('!@!@!')
                return pass3Split.join('')
            }
              
            
        }

        if(cripLevel == 1){
            let passReturn = randomPass1(pass)
            console.log(passReturn)
            res.render('index',{passReturn})

        }
        if(cripLevel == 2){
            let passReturn = randomPass2(pass)
            console.log(passReturn)
            res.render('index',{passReturn})
        }
        if(cripLevel == 3){
            let passReturn = randomPass3(pass)
            console.log(passReturn)
            res.render('index',{passReturn})
        }
        
    }
}