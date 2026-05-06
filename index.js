import 'dotenv/config'
import { GoogleGenAI } from '@google/genai'
import readline from 'node:readline'



const api = process.env.API_KEY
const ai = new GoogleGenAI({apiKey: api})


const d1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})


d1.question("What do you want to summarize? ", async text1 => {
    let raw = text1.trim()
    if (raw !== ``){      
        try{
        const response = await ai.models.generateContent ({
            model: 'gemini-2.5-flash',
            contents: `summarize the content in ${raw} and organize it into short bullet form list`
        })
        
        console.log(response.text)    
        d1.close()
        } catch (error){
            console.error("Error fetching text")
        }
    } else {
        console.log("~~There is nothing to summarize~~")
        d1.close()
    }
})

