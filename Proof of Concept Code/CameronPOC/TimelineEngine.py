import wikipedia
import re
from gensim.summarization.summarizer import summarize

class TimelineObject():
    pass

class TimelineEngine():

    def getWikiPage(self, locationInfo):
        result = wikipedia.search("{}".format(locationInfo["name"]))[0]
        page = wikipedia.page(result)
        return page


    def getPageContent(self, locationInfo):
        page = self.getWikiPage(locationInfo)

        page_history = page.section("History")
        page_content = page.content
        if len(page_history) < 10:
            return page_content, .2, page.images

        return page_history, .9, page.images
    
    def findBestImage(self, images, label):
        for image in images:
            if re.search(image, label):
                return image
    
    def generateTimeline(self, locationInfo):
        print(locationInfo['name'])
        summary_text, ratio, images = self.getPageContent(locationInfo)
        #summary_text = re.sub('[^A-Za-z0-9.]+', ' ', summary_text).lstrip()
        summary_text = summarize(summary_text, ratio=ratio, split=True)

        timeline_sentences = []

        for sentence in summary_text:
            if bool(re.search('[1-4][0-9]{3}', sentence)) and bool(re.search('in', sentence)):
                timeline_sentences.append(sentence)

        
        
        image = self.findBestImage(images, locationInfo['name'])

        TEObject = TimelineObject()
        TEObject.timeline_sentences = timeline_sentences[0:4]
        TEObject.image = image

        return TEObject
            

    def TimelineGenerationCheck(self, locationInfo):
        if bool(re.search(locationInfo['name'], self.getPageContent(locationInfo)[0])):         
            return True
        else:
            return True



